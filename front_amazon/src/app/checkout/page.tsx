import { ProductService } from "@/assets/styles/services/product/product.service"
import { NO_INDEX_PAGE } from "@/constants/app.constants"
import Checkout from "./Checkout"


export const metadata = {
    title: 'Checkout',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProduct() {
    const data = await ProductService.getAll({
        page: 1,
        perPage: 20,
        ratings: ''
    })

    return data
}

export default async function CheckoutPage() {
    const data = await getProduct()

    return <Checkout products={data.products}/>
}