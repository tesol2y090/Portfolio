import React, { useState, useCallback, useEffect, useContext } from "react"
import styled from "styled-components"
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container as RawContainer,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  Button,
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap"
import { LogOut } from "react-feather"
import Blockies from "react-blockies"
import { useWeb3React } from "@web3-react/core"
import useEagerConnect from "../hooks/useEagerConnect"
import useInactiveListener from "../hooks/useInactiveListener"
import { useToasts } from "../hooks/useToasts"
import { ContractsContext } from "../hooks/useContracts"
import { shortAddress } from "../utils"

import { injected } from "../connectors/connectors"

const Wrapper = styled(Navbar)`
  min-height: 80px;
  position: absolute;
  top: 0;

  a {
    color: inherit;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;

    :first-child {
      margin-left: 0px;
      margin-right: 10px;
    }
  }
`

const NavSelect = styled(DropdownToggle)`
  display: flex;
  align-items: center;
`

const Connector = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    color: white;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(101deg, #78e4ff, #ff48fa);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: none;
  }

  display: flex;
  flex-direction: row;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    flex: 70%;
    display: flex;
    align-items: center;

    :first-child {
      flex: 20%;
    }
    :last-child {
      flex: 10%;
    }
  }
`

const Container = styled(RawContainer)``

const Connectors = [
  {
    name: "Metamask",
    connector: injected,
    icon: "metamask.svg",
  },
]

const Main = () => {
  const [isOpen, setOpen] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const context = useWeb3React()
  const { add } = useToasts()
  const [locked, setLocked] = useState(false)
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context
  const { GANGPortToken } = useContext(ContractsContext)

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState()

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  const toggle = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])

  const toggleModal = useCallback(() => {
    setLoginModal(!loginModal)
  }, [loginModal])

  useEffect(() => {
    if (error && error.name === "UnsupportedChainIdError" && !locked) {
      setLocked(true)
      add({
        title: "Unsupported Network",
        content: <div>Please switch to BSC Testnet or Kovan network</div>,
      })
    }
  }, [error, locked])

  console.log("chainId --> ", chainId)

  return (
    <>
      <Modal isOpen={loginModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Choose Wallet Provider</ModalHeader>
        <ModalBody>
          {Connectors.map((item, index) => {
            const { connector, name, icon } = item
            return (
              <Connector
                key={index}
                onClick={() => {
                  setActivatingConnector(connector)
                  activate(connector)
                  setLoginModal(false)
                }}
              >
                <div>
                  <img src={`${icon}`} alt={`wallet-icon-${index}`} />
                </div>
                <div>{name}</div>
              </Connector>
            )
          })}
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Wrapper color='transparent' light expand='md'>
        <Container>
          <NavbarBrand>
            {chainId === 56 && (
              <Badge size='sm' color='info'>
                BSC
              </Badge>
            )}
            {chainId === 97 && (
              <Badge size='sm' color='secondary'>
                BSC Testnet
              </Badge>
            )}
            {chainId === 42 && (
              <Badge size='sm' color='warning'>
                Kovan
              </Badge>
            )}
            {chainId === 1337 && (
              <Badge size='sm' color='dark'>
                Dev
              </Badge>
            )}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {!account ? (
                <Button color='warning' onClick={toggleModal}>
                  Connect Wallet
                </Button>
              ) : (
                <UncontrolledDropdown className='pr-1'>
                  <NavSelect nav>
                    <Blockies
                      seed={account}
                      className='rounded-circle width-35'
                    />
                    <h6 style={{ color: "#fff", margin: 0, marginLeft: 12 }}>
                      {shortAddress(account)}
                    </h6>
                    <h6 style={{ color: "#fff", margin: 0, marginLeft: 12 }}>
                      {GANGPortToken.balance}
                    </h6>
                    <h6 style={{ color: "#fff", margin: 0, marginLeft: 12 }}>
                      {GANGPortToken.symbol}
                    </h6>
                  </NavSelect>
                  <DropdownMenu left='true'>
                    <DropdownItem disabled>
                      <div className='font-small-3'>
                        {shortAddress(account)}
                      </div>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <div
                        onClick={() => {
                          deactivate()
                        }}
                      >
                        <LogOut size={16} className='mr-1' /> Exit
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Wrapper>
    </>
  )
}

export default Main
