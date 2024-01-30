
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import Products from "./Products";


export const metadata = {
    title: 'Products',
    ...NO_INDEX_PAGE
}

export default function ProductPage() {
    return <Products />
}