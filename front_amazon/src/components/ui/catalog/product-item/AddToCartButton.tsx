import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';



const AddToCartButton: FC<{product: IProduct}> = ({product}) => {
    const {addToCart, removeFromCart} = useActions()
    const {items} = useCart()

    const currentElement = items.find(
        (        cartItem: { product: { id: number; }; })=> cartItem.product.id === product.id
    )

    return (
        <div>
            <button
                onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
                    product,
                    quantity: 1,
                    price: product.price
                })}
                >
                    {currentElement ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
        </div>
    )
}

export default AddToCartButton