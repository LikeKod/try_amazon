import { Prisma } from "@prisma/client";
import { returnCategoryObject } from "src/category/category.object";
import { returnReviewObject } from "src/review/review.object";

export const productObject: Prisma.ProductSelect = {
    images: true,
    description: true,
    id: true,
    name: true,
    price: true,
    createdAt: true,
    slug: true,
}

export const productObjectFullest: Prisma.
ProductSelect = {
    ...productObject,
    reviews: {
        select: returnReviewObject
    },
    category: {select: returnCategoryObject}
}

