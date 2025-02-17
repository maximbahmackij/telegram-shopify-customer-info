import type { Order } from "../@types/order";
import shopify from "../config/shopify";
import { GET_ORDERS_QUERY } from "../queries";

interface GetOrdersResponse {
  customer: {
    orders: {
      edges: {
        node: Order;
        cursor: string;
      }[];
    };
  };
}

export async function getOrders(customerAccessToken: string): Promise<Order[]> {
  try {
    const response = await shopify.request<GetOrdersResponse>(
      GET_ORDERS_QUERY,
      {
        variables: {
          customerAccessToken,
        },
      }
    );
    return (
      response?.data?.customer?.orders?.edges.map((edge) => edge.node) ?? []
    );
  } catch (error) {
    console.error("⚠️ Error retrieving orders:", error);
    return [];
  }
}
