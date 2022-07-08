import { JwtAuthGuard } from "@app/common";
import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { CreateOrderRequest } from "./dto/create-order-request";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrder(@Body() request: CreateOrderRequest, @Req() req: any) {
    return await this.ordersService.createOrder(
      request,
      req.cookies?.Authentication
    );
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
