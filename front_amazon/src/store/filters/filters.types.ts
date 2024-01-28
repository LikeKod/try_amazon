import { TypeProductDataFilters } from "@/assets/styles/services/product/product.type"

export interface IFiltersState {
    isFilterUpdated: boolean
    queryParams: TypeProductDataFilters
}

export interface IFiltersActionsPayload {
    key: keyof TypeProductDataFilters
    value: string
}