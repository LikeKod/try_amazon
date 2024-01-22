import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { productObject } from 'src/product/product.object';
import * as YooKassa from 'yookassa';
import { OrderDto } from './order.dto';


const yooKassa = new YooKassa({
    shopId: process.env['SHOP_ID'],
    secretKey: process.env['PAYMENT_TOKEN']
})

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService){}

    async getAll(userId: number){
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: productObject
                        }
                    }
                }
            }
        })
    }

    async placeOrder(dto: OrderDto, userId: number) {
        const order = await this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: dto.items
                },
                user: {
                    connect: {
                        id: userId
                    }
                },
            }
        })
        return order
    }
}
