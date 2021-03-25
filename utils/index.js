import { Spinner } from "reactstrap"

export const shortAddress = (address, first = 7, last = -5) => {
  return `${address.slice(0, first)}...${address.slice(last)}`
}

export const processingToast = (
  title = "Processing",
  subtitle = "Transaction is being processed",
  loading = false,
  txId = "",
  chainId
) => {
  let suffix = "bscscan.com"

  if (chainId === 42) {
    suffix = "kovan.etherscan.io"
  } else if (chainId === 97) {
    suffix = "testnet.bscscan.com"
  }

  return {
    title,
    content: (
      <div>
        {subtitle}
        <br />
        <a href={`https://${suffix}/tx/${txId}`} target='_blank'>
          {" "}
          {shortAddress(txId)}
        </a>
        {loading && (
          <Spinner style={{ marginLeft: 10 }} size='sm' color='secondary' />
        )}
      </div>
    ),
  }
}
