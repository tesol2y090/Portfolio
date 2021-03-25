import React, {
  useEffect,
  useMemo,
  useReducer,
  createContext,
  useState,
  useCallback,
} from "react"
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core"
import { useERC20 } from "./useERC20"
import { CONTRACTS } from "../contracts/contracts"

export const ContractsContext = createContext({})

const Provider = ({ children }) => {
  const context = useWeb3React()
  const { chainId, account, active, error, library } = context

  const contractsContext = useMemo(() => ({}), [])

  return (
    <ContractsContext.Provider value={contractsContext}>
      {children}
    </ContractsContext.Provider>
  )
}

export default Provider
