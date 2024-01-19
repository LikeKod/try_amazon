import { ReviewsService } from "@/assets/styles/services/review.service";
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import { useQuery } from "react-query";
import { Rating } from "react-simple-star-rating";

export const ProductRating: FC<{product: IProduct}> = ({product}) => {
    const {data: rating} = useQuery(['get product rating', product.id], () => ReviewsService.getAverageByProduct(product.id), {
        select: ({data}) => data
    })

    return (
    <div>
        <Rating
        readonly
        initialValue={rating}
        SVGstyle={{display: 'inline-block'}}
        size={34}
        allowFraction
        transition />
        <span>({product.reviews.length} reviews)</span>

    </div>)
}

