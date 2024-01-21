import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import { BsCart2, BsCartFill } from "react-icons/bs";



const AddToCartButton: FC<{product: IProduct}> = ({product}) => {
    const {addToCart, removeFromCart} = useActions()
    const {items} = useCart()

    const currentElement = items.find(
        (        cartItem: { product: { id: number; }; })=> cartItem.product.id === product.id
    )

    return (
        <div>
            <button
            className="text-primary"
                onClick={() => currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
                    product,
                    quantity: 1,
                    price: product.price
                })}
                >
                    {currentElement ? <BsCart2  /> : <BsCartFill />}
            </button>
        </div>
    )
}

export default AddToCartButton