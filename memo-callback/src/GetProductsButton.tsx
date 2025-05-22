import { memo } from "react"


type Props = {
    onFetchProducts: () => void
}

const GetProductsButton = memo(({onFetchProducts}: Props) => {
    console.log("Rendered Button Component")
  return (
    <div>
        <button onClick={onFetchProducts}>Get Products</button>
    </div>
  )
})

export default GetProductsButton