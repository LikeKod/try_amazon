import { ProductService } from "@/assets/styles/services/product/product.service";
import { TypeParamsFilters, TypeProductDataFilters } from "@/assets/styles/services/product/product.type";
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import { Metadata } from "next";
import ProductExplorer from "./ProductExplorer";


export const metadata: Metadata = {
    title: 'Explorer',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts(searchParams: TypeProductDataFilters) {
    const data = await ProductService.getAll(searchParams)

    return data
}

export default async function ExplorerPage({searchParams}: TypeParamsFilters) {
    
    const data = await getProducts(searchParams)
    
    return <ProductExplorer initialProducts={data} />
}