export default `
  query customer($customerAccessToken: String!){
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      email
      displayName
      phone
    }
  }
`;
