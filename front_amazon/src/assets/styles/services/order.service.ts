import { IOrder } from "@/types/order.interface"
import { instance } from "../api/api.intersepter"



const ORDERS = 'orders'

enum EnumOrderStatus{
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED' 
}

type TypeData = {
    status?: EnumOrderStatus
    items: {
        quantity: number
        productId: number
        price: number
    }[]
}

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>({
            url: ORDERS,
            method: 'GET'
        })
    },

    async getByUserId() {
        return instance<IOrder[]>({
            url: `${ORDERS}/by-user`
        })
    },

    async place(data: TypeData) {
        return instance<{confirmation: {confirmation_url: string}}> ({
            url: ORDERS,
            method: 'POST',
            data
        })
    }
}