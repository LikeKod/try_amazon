import { faker } from '@faker-js/faker'
import { PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'
// import { generateSlug } from 'src/utils/generate-slug'
// import { getRandomNumber } from 'src/utils/random-number'

dotenv.config()
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
    const products: Product[] = []


    for( let i = 0; i < quantity; i++){
        const productName = faker.commerce.productName()
        const categoryName = faker.commerce.department()

        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: faker.helpers.slugify(productName).toLocaleLowerCase(),
                description: faker.commerce.productDescription(),
                price: +faker.commerce.price(10, 999, 0),
                images: Array.from({length: faker.number.int({min:2, max:6})}).map(() => `./uploads/${faker.number.int({min: 1, max: 5})}.jpg`),
                category: {
                    create: {
                        name: categoryName,
                        slug: faker.helpers.slugify(categoryName).toLocaleLowerCase(),
                    },
                },
                reviews: {
                    create: [
                        {
                            rating: faker.number.int({min:1, max:5}),
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            rating: faker.number.int({min:1, max:5}),
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                    ]
                },
            }

        })
        products.push(product)
    }

    console.log(`Created ${products.length} products`)

}




async function main() {
    console.log('Start seeding')
    await createProducts(10)
}

main()
.catch(e => console.error(e))
.finally(async () => {
    await prisma.$disconnect()
})