import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';
import { ReviewDto } from './review.dto';
import { returnReviewObject } from './review.object';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService,
    private productService: ProductService,
    ) {}

  async getAll() {
    return this.prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: returnReviewObject,
    });
  }

  async create(userId: number, dto: ReviewDto, productId: number) {
    await this.productService.byId(productId)
    return this.prisma.review.create({
      data: {
        ...dto,
        product: {
          connect: {
            id: productId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async getAvarageValueByProductId(productId: number) {
    return this.prisma.review
      .aggregate({
        where: {productId},
        _avg: {rating: true}
      })
      .then(data => data._avg)
  }
}
