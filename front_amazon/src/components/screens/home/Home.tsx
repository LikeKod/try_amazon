import Catalog from "@/components/ui/catalog/Catalog"
import Heading from "@/components/ui/Heading"
import Meta from "@/components/ui/Meta"
import { TypePaginationProduct } from "@/types/product.interface"
import { FC } from "react"


const Home: FC<TypePaginationProduct> = ({products, length}) => {
    return (
    <Meta title="Home">
        <Heading>Hello World</Heading>

        <Catalog products={products || []} />    
    </Meta>
    )
}

export default Home