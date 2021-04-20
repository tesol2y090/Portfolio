import React, {
  useEffect,
  useMemo,
  useReducer,
  createContext,
  useState,
  useCallback,
} from "react"
import { useWeb3React } from "@web3-react/core"
import { useERC20 } from "./useERC20"
import { useMessagePool } from "./useMessagePool"
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

  let messagesPoolAddress
  switch (chainId) {
    case 42:
      messagesPoolAddress = CONTRACTS.KOVAN.MessagePool
      break
  }
  const MessagePool = useMessagePool(
    messagesPoolAddress,
    account,
    library,
    tick
  )

  const contractsContext = useMemo(
    () => ({ GANGPortToken, MessagePool, increaseTick }),
    [GANGPortToken, MessagePool, increaseTick]
  )

  return (
    <ContractsContext.Provider value={contractsContext}>
      {children}
    </ContractsContext.Provider>
  )
}

export default Provider
