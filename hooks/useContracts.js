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
  const [tick, setTick] = useState(0)
  const context = useWeb3React()
  const { chainId, account, active, error, library } = context
  const GANGPortToken = useERC20(chainId, account, library, tick)

  const increaseTick = useCallback(() => {
    setTick(tick + 1)
  }, [tick])

  const contractsContext = useMemo(() => ({ GANGPortToken }), [GANGPortToken])

  return (
    <ContractsContext.Provider value={contractsContext}>
      {children}
    </ContractsContext.Provider>
  )
}

export default Provider
