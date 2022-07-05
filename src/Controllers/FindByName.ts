import { Request, Response } from 'express'
import { prisma } from '../Database/prismaClient'

const test: string = 'robson'
export class FindByNameController {
  async handle(request: Request, response: Response) {
    const GetProduct = await prisma.product
      .findMany({
        where: {
          product_name: `${test}`
        },
        select: {
          product_name: true,
          price: true,
          bar_code: true,
          description: true
        }
      })
      .catch(() => response.json('404 not found'))
    return response.status(200).json(GetProduct)
  }
}
