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

  const getAllMessages = useCallback(async () => {
    const messages = []
    for (let i = 0; i < messagesLength; i++) {
      const message = await messagesPoolContract.messagesPool(i)
      messages.push(message)
    }
    return messages
  })

  useEffect(() => {
    messagesPoolContract && getMessagesLength().then(setMessagesLength)
    messagesPoolContract && getIsWriteMessage().then(setIsWriteMessage)
    messagesPoolContract &&
      messagesLength &&
      getAllMessages().then(setAllMessages)
  }, [messagesPoolContract, account, tick, messagesLength])

  return {
    messagesPoolAddress,
    messagesLength,
    postMessage,
    allMessages,
    isWriteMessage,
  }
}
