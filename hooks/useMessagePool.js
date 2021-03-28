import { useMemo, useEffect, useState, useCallback } from "react"
import { ethers } from "ethers"
import MessagePool from "../abi/MessagePool.json"

export const useMessagePool = (messagesPoolAddress, account, library, tick) => {
  const { messagesPoolContract } = useMemo(() => {
    if (!account || !messagesPoolAddress || !library) {
      return {
        messagesPoolContract: null,
      }
    }

    return {
      messagesPoolContract: new ethers.Contract(
        messagesPoolAddress,
        MessagePool.abi,
        library.getSigner()
      ),
    }
  }, [account, messagesPoolAddress, library])

  const [messagesLength, setMessagesLength] = useState(0)
  const [allMessages, setAllMessages] = useState([])
  const [isWriteMessage, setIsWriteMessage] = useState(false)

  const getMessagesLength = useCallback(async () => {
    const messagesLength = await messagesPoolContract.getMessagesLength()
    return Number(messagesLength)
  }, [messagesPoolContract, account])

  const getIsWriteMessage = useCallback(async () => {
    return await messagesPoolContract.isWriteMessage(account)
  }, [messagesPoolContract, account])

  const postMessage = useCallback(
    async (message) => {
      return await messagesPoolContract.postMessage(message)
    },
    [messagesPoolContract, account]
  )

  useEffect(() => {
    messagesPoolContract && getMessagesLength().then(setMessagesLength)
    messagesPoolContract && getIsWriteMessage().then(setIsWriteMessage)
  }, [messagesPoolContract, account, tick])

  return {
    messagesPoolAddress,
    messagesLength,
    postMessage,
    isWriteMessage,
  }
}
