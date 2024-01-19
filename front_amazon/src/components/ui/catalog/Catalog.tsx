import { IProduct } from '@/types/product.interface';
import { FC } from 'react';
import Loader from '../Loader';
import ProductItem from './product-item/ProductItem';

const Catalog: FC<{ products: IProduct[]; isLoading? : boolean }> = ({ products, isLoading }) => {

    if(isLoading) return <Loader />

	return (
		<section>
			{products.length ? (
				products.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog