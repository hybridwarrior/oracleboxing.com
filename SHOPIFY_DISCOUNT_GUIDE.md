# Shopify Discount Code Creation Guide

This guide provides multiple methods to create the `TRACKSUIT100OFF` discount code (100% off product, excludes shipping).

## Discount Code Details

- **Code**: `TRACKSUIT100OFF`
- **Type**: Percentage discount
- **Value**: 100% (1.0)
- **Applies To**: All products
- **Shipping**: NOT discounted (customer pays full shipping)
- **Usage**: Unlimited (can be restricted after creation)
- **Customer Restriction**: None (all customers can use)

---

## Method 1: Manual Creation (Shopify Admin)

### Steps:

1. **Log into Shopify Admin**
   - Navigate to your Shopify admin dashboard
   - URL: `https://[your-shop-name].myshopify.com/admin`

2. **Navigate to Discounts**
   - Click "Discounts" in the left sidebar
   - Click "Create discount" button

3. **Select Discount Type**
   - Choose "Discount code"

4. **Configure Discount Code**
   - **Discount code**: `TRACKSUIT100OFF`
   - **Type**: Percentage
   - **Value**: 100%

5. **Set Applies To**
   - Select "All products"
   - OR select specific tracksuit products

6. **Configure Minimum Requirements**
   - Set to "None" for no minimum purchase
   - OR set minimum purchase amount if desired

7. **Configure Customer Eligibility**
   - Select "All customers"
   - OR restrict to specific customer segments

8. **Configure Usage Limits**
   - Leave "Limit number of times this discount can be used in total" unchecked for unlimited
   - Check "Limit to one use per customer" if you want single-use per customer

9. **Set Active Dates**
   - Start date: Set to today or desired start date
   - End date: Leave blank for no expiration

10. **Shipping Discount**
    - ⚠️ **IMPORTANT**: Leave shipping discount section empty
    - Do NOT check "Free shipping" option
    - This ensures customer pays full shipping cost

11. **Save Discount**
    - Click "Save discount" button
    - Verify discount appears in discount list

---

## Method 2: GraphQL Admin API (Programmatic)

### Prerequisites:

1. **Shopify Admin API Access Token**
   - Generate in Shopify admin: Settings → Apps and sales channels → Develop apps
   - Required scope: `write_discounts`

2. **Shop Name**
   - Your Shopify store name (e.g., `oracle-boxing`)

### Using the Provided Script:

1. **Edit the script**:
   ```bash
   nano scripts/create-discount.sh
   ```

2. **Replace placeholders**:
   - `YOUR_SHOP_NAME` → Your Shopify store name
   - `YOUR_ADMIN_API_TOKEN` → Your Admin API access token

3. **Make executable**:
   ```bash
   chmod +x scripts/create-discount.sh
   ```

4. **Run script**:
   ```bash
   bash scripts/create-discount.sh
   ```

### Manual cURL Request:

```bash
curl -X POST \
  "https://[YOUR_SHOP_NAME].myshopify.com/admin/api/2025-01/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: [YOUR_ADMIN_API_TOKEN]" \
  -d '{
    "query": "mutation { discountCodeBasicCreate(basicCodeDiscount: { title: \"Tracksuit 100% Off\", code: \"TRACKSUIT100OFF\", startsAt: \"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'\", customerSelection: { all: true }, customerGets: { value: { percentage: 1.0 }, items: { all: true } }, appliesOncePerCustomer: false }) { codeDiscountNode { id codeDiscount { ... on DiscountCodeBasic { title codes(first: 1) { nodes { code } } } } } userErrors { field message } } }"
  }'
```

---

## Method 3: Node.js Script (Alternative)

If you prefer using Node.js with the Shopify API library:

```bash
npm install @shopify/shopify-api
```

Create `scripts/create-discount.js`:

```javascript
const { shopifyApi } = require('@shopify/shopify-api');

const shopify = shopifyApi({
  apiKey: 'YOUR_API_KEY',
  apiSecretKey: 'YOUR_API_SECRET',
  scopes: ['write_discounts'],
  hostName: 'YOUR_SHOP_NAME.myshopify.com',
  apiVersion: '2025-01',
  isEmbeddedApp: false,
});

async function createDiscount() {
  const session = {
    shop: 'YOUR_SHOP_NAME.myshopify.com',
    accessToken: 'YOUR_ADMIN_API_TOKEN',
  };

  const client = new shopify.clients.Graphql({ session });

  const mutation = `
    mutation {
      discountCodeBasicCreate(basicCodeDiscount: {
        title: "Tracksuit 100% Off"
        code: "TRACKSUIT100OFF"
        startsAt: "${new Date().toISOString()}"
        customerSelection: {
          all: true
        }
        customerGets: {
          value: {
            percentage: 1.0
          }
          items: {
            all: true
          }
        }
        appliesOncePerCustomer: false
      }) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              codes(first: 1) {
                nodes {
                  code
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const response = await client.query({ data: mutation });
    console.log('✅ Discount created:', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createDiscount();
```

Run with:
```bash
node scripts/create-discount.js
```

---

## Testing the Discount Code

### Test Checkout:

1. Add tracksuit to cart
2. Go to checkout
3. Enter discount code: `TRACKSUIT100OFF`
4. Click "Apply"
5. **Expected Result**:
   - Product total: $0.00 (or equivalent currency)
   - Shipping: Full shipping cost still applies
   - Total: Shipping cost only

### Verification Checklist:

- ✅ Product price reduced to $0.00
- ✅ Shipping cost NOT reduced
- ✅ Discount code applies successfully
- ✅ Customer can proceed to payment
- ✅ Order confirmation shows $0.00 product + shipping

---

## Troubleshooting

### Common Issues:

1. **"Discount code not found"**
   - Verify code is active and not expired
   - Check spelling: `TRACKSUIT100OFF` (case-insensitive usually)

2. **"Discount code doesn't apply to this product"**
   - Verify discount applies to "All products" or includes tracksuit
   - Check if product is in excluded collections

3. **Shipping also discounted**
   - Edit discount in Shopify admin
   - Remove free shipping option
   - Save changes

4. **API authentication errors**
   - Verify access token has `write_discounts` scope
   - Check token hasn't expired
   - Verify shop name is correct

---

## Recommended Approach

**For Quick Setup**: Use **Method 1 (Manual Creation)** - Takes 2-3 minutes and requires no technical setup.

**For Automation**: Use **Method 2 (GraphQL API)** - Better for creating multiple codes or automating discount management.

**For Integration**: Use **Method 3 (Node.js)** - Best if you're building a larger integration with Shopify.

---

## Support Resources

- **Shopify Discount API Docs**: https://shopify.dev/docs/api/admin-graphql/2025-01/mutations/discountCodeBasicCreate
- **Shopify Admin**: https://[your-shop-name].myshopify.com/admin/discounts
- **API Access Setup**: https://shopify.dev/docs/apps/auth/admin-app-access-tokens
