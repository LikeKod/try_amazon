import { ProductService } from "@/assets/styles/services/product/product.service";
import Catalog from "@/components/ui/catalog/Catalog";
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";



const SearchPage: NextPage = () => {
    const {query} = useRouter()

    const {data} = useQuery(['search products', query.term], () => ProductService.getAll({searchTerm: query.term as string}))

    return (
        <Meta title="Search">
            <Layout>
                <Catalog
                products={data?.products || []}
                title={`Search on request "${query.term || ''}"`} />
            </Layout>
        </Meta>
    )
} 

export default SearchPage