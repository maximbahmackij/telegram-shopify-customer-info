import type { Customer } from "../@types/customer";
import shopify from "../config/shopify";
import { GET_CUSTOMER_QUERY } from "../queries";

interface GetCustomerResponse {
  customer: Customer;
}

export async function getCustomer(
  customerAccessToken: string
): Promise<Customer | null> {
  try {
    const { data, errors } = await shopify.request<GetCustomerResponse>(
      GET_CUSTOMER_QUERY,
      {
        variables: {
          customerAccessToken,
        },
      }
    );

    if (errors?.graphQLErrors?.length) {
      throw new Error(errors.graphQLErrors[0]);
    }

    return data?.customer ?? null;
  } catch (error) {
    console.error("⚠️ Error retrieving customer.", error);
    return null;
  }
}
