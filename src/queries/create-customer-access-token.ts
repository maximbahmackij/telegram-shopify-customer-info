export default `
  mutation customerAccessTokenCreate($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        message
      }
    }
  }
`;

