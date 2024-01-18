import { useProfile } from "@/hooks/useProfile";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';



const FavoriteButton: FC<{productId: number}> = ({productId}) => {
    const {profile} = useProfile()

    const isExist = profile.(
        (        cartItem: { product: { id: any; }; }) => cartItem.product.id === product.id
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

export default FavoriteButton