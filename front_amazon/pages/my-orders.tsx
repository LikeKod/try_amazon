import { OrderService } from "@/assets/styles/services/order.service";
import Heading from "@/components/ui/Heading";
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import { useQuery } from "react-query";



const MyOrdersPage: NextPageAuth = () => {
    const {data: orders} = useQuery(['my orders'], () => OrderService.getAll(), {select: ({data}) => data})


    return (
        <Meta title="My Orders">
            <Layout>
                <Heading>My Orders!</Heading>

                <section>
                    {orders?.length ? orders?.map(order => (
                        <div key={order.id}>
                            <span>#{order.id}</span>
                            <span>{order.status}</span>
                            <span>{order.createdAt}</span>
                            <span>{order.total}</span>
                        </div>
                    )) : <div>Order not found</div>}
                </section>

            </Layout>
        </Meta>
    )
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage