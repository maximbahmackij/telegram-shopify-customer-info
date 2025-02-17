export default `
  query customer($customerAccessToken: String!){
    customer(customerAccessToken: $customerAccessToken) {
      id
      orders (first: 5) {
        edges {
          node {
            id
            orderNumber
            totalPrice {
              amount
              currencyCode
            }
            processedAt
          }
        }
      }
    }
  }
`;
