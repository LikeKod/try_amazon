import { ICategory } from "./category.interface";
import { IReview } from "./review.interface";

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    reviews: IReview[]
    images: string[]
    createdAt: string
    category: ICategory
    isLoading: boolean
}

export interface IProductDetails {
    product: IProduct
}

export type TypeProduct ={
    products: IProduct[]
}

export type TypePaginationProduct ={
    length: number
    products: IProduct[]
}