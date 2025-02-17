import type { CustomerAccessToken } from "../@types/customer-access-token";
import shopify from "../config/shopify";
import { CREATE_CUSTOMER_ACCESS_TOKEN_QUERY } from "../queries";

interface CreateCartResponse {
  customerAccessTokenCreate: {
    customerAccessToken: CustomerAccessToken;
    userErrors?: { code: string; message: string }[];
  };
}

export async function createCustomerAccessToken(
  email: string,
  password: string
) {
  const { data, errors } = await shopify.request<CreateCartResponse>(
    CREATE_CUSTOMER_ACCESS_TOKEN_QUERY,
    {
      variables: {
        email,
        password,
      },
    }
  );

  if (data?.customerAccessTokenCreate?.userErrors?.length) {
    throw new Error(data?.customerAccessTokenCreate?.userErrors?.[0].message);
  }

  if (errors?.graphQLErrors?.length) {
    throw new Error(errors.graphQLErrors[0]);
  }

  return data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;
}
