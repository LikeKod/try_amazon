import { ICartItem } from "@/types/cart.interface";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import { FC } from "react";
import styles from '../Cart.module.scss';
import CartActions from "./cartActions";


const CartItem: FC<{item: ICartItem}> = ({item}) => {
    return (
        <div className="styles.item">
            <Image
                src={item.product.images[0]}
                width={100}
                height={100}
                alt={item.product.name}
            />
            <div>
                <div className={styles.name}>{item.product.name}</div>
                <div className={styles.price}>{convertPrice(item.product.price)}</div>

                <CartActions item={item} />
            </div>
        </div>
    )
}

export default CartItem