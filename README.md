# Shopify customer info for Telegram

Example of displaying the customer info from shopify store in telegram bot

### Setup

Required .env-File variables:
- `BOT_TOKEN`: Token of your telegram bot
- `SHOPIFY_STORE_URL`: Your shopify store's domain, e.x. `your-domain.myshopify.com`
- `SHOPIFY_STOREFRONT_TOKEN`: Your storefront api token
- `SHOPIFY_API_VERSION`: shopify api version, default `2025-01`

```shell
git clone git@github.com:maximbahmackij/telegram-shopify-customer-info.git
cd telegram-shopify-customer-info
npm install
npm run dev
```
## Example
<img src="https://github.com/user-attachments/assets/1a981470-4c27-4c66-80d7-a2f9b55a5d8f" alt="Example 1" height="350">
<img src="https://github.com/user-attachments/assets/da2972b7-2041-4439-8e36-5932fc6268d9" alt="Example 2" height="350">
<img src="https://github.com/user-attachments/assets/793eadc6-97fb-4c1f-853d-2e437fd10635" alt="Example 3" height="350">
<img src="https://github.com/user-attachments/assets/69a2db26-6990-407e-ae48-572d3d1526a0" alt="Example 4" height="350">

## Resources

- [Storefront](https://shopify.dev/docs/api/storefront) - Storefront GraphQL Api
- [telegraf.js](https://telegraf.js.org/) - Modern Telegram Bot API framework for Node.js
- [NodeJs](https://nodejs.org/) - dock nodejs
- [TypeScript](https://www.typescriptlang.org/) - dock typescript
