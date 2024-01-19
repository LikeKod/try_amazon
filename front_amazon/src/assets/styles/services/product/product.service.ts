import { IProduct, TypePaginationProduct } from "@/types/product.interface"
import { axiosClassic, instance } from "../../api/api.intersepter"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.type"


export const ProductService = {
    async getAll(queryData = {} as TypeProductDataFilters) {
        return axiosClassic<TypePaginationProduct>({
            url: PRODUCTS,
            method: 'GET',
            params: queryData
        })
    },

    async getSimilar(id: string | number ) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCTS}/similar/${id}`,
            method: 'GET',
        })
    },

    async getBySlug(slug: string) {
        return axiosClassic<IProduct>({
            url: `${PRODUCTS}/by-slug/${slug}`,
            method: 'GET',
        })
    },

    async getByCategoryId(categorySlug: string) {
        return axiosClassic<IProduct[]>({
            url: `${PRODUCTS}/by-category/${categorySlug}`,
            method: 'GET',
        })
    },

    async getById(id: string | number) {
        return instance<IProduct>({
            url: `${PRODUCTS}/by-id/${id}`,
            method: 'GET',
        })
    },

    async create() {
        return instance<IProduct>({
            url: PRODUCTS,
            method: 'POST'
        })
    },

    async update(id: string | number, data: TypeProductData) {
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`,
            method: 'PUT',
            data
        })
    },

    async delete(id: string | number) {
        return instance<IProduct> ({
            url: `${PRODUCTS}/${id}`,
            method: 'DELETE'
        })
    }
}