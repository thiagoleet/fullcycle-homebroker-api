import { OrderType } from '../entities/order.entity';

export class CreateOrderDto {
  walletId: string;
  asssetId: string;
  shares: number;
  price: number;
  type: OrderType;
}
