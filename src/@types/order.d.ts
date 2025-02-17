export interface Order {
  id: string;
  orderNumber: number;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  processedAt: Date;
}
