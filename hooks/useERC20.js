import { useMemo, useEffect, useState, useCallback } from "react"
import { ethers } from "ethers"
import Token from "../abi/ERC20.json"
import { CONTRACTS } from "../contracts/contracts"

export const useERC20 = (chainId, account, library, tick) => {
  let address
  switch (chainId) {
    case 42:
      address = CONTRACTS.KOVAN.ERC20
      break
    default:
      address = chainId
  }

  const erc20Contract = useMemo(() => {
    if (!account || !address || !library) {
      return
    }

    return new ethers.Contract(address, Token.abi, library.getSigner())
  }, [account, address, library])

  const [balance, setBalance] = useState("0")
  const [decimals, setDecimals] = useState()
  const [symbol, setSymbol] = useState("--")
  const [totalSupply, setTotalSupply] = useState("0")

  const getBalance = useCallback(async () => {
    try {
      const balance = await erc20Contract.balanceOf(account)
      return Number(balance).toString()
    } catch (e) {
      return "0"
    }
  }, [erc20Contract, account])

  const getSymbol = useCallback(async () => {
    try {
      return await erc20Contract.symbol()
    } catch (e) {
      return "--"
    }
  }, [erc20Contract, account])

  const getDecimals = useCallback(async () => {
    try {
      const decimals = await erc20Contract.decimals()
      return Number(decimals)
    } catch (e) {
      return 0
    }
  }, [erc20Contract, account])

  const approve = useCallback(
    async (address) => {
      return await erc20Contract.approve(
        address,
        "9999999999999999999999999999"
      )
    },
    [erc20Contract, account]
  )

  const allowance = useCallback(
    async (address) => {
      return await erc20Contract.allowance(account, address)
    },
    [erc20Contract, account]
  )

  const getTotalsSupply = useCallback(async () => {
    try {
      const totalSupply = await erc20Contract.totalSupply()
      return Number(totalSupply)
    } catch (e) {
      return 0
    }
  }, [erc20Contract, account])

  useEffect(() => {
    erc20Contract && getBalance().then(setBalance)
    erc20Contract && getDecimals().then(setDecimals)
    erc20Contract && getSymbol().then(setSymbol)
    erc20Contract && getTotalsSupply().then(setTotalSupply)
  }, [
    account,
    getBalance,
    getDecimals,
    getSymbol,
    getTotalsSupply,
    erc20Contract,
    tick,
  ])

  return {
    balance,
    decimals,
    approve,
    address,
    symbol,
    allowance,
    totalSupply,
  }
}
