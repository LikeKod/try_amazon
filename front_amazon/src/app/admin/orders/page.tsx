
import { NO_INDEX_PAGE } from "@/constants/app.constants";
import Orders from "./Orders";


export const metadata = {
    title: 'Orders',
    ...NO_INDEX_PAGE
}

export default function OrdersPage() {
    return <Orders />
}