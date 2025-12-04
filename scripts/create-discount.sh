#!/bin/bash

# Shopify Discount Code Creation Script
# Creates a 100% discount code for tracksuit product (excludes shipping)

# USAGE:
# 1. Replace YOUR_SHOP_NAME with your Shopify store name (e.g., oracle-boxing)
# 2. Replace YOUR_ADMIN_API_TOKEN with your Shopify Admin API access token
# 3. Run: bash scripts/create-discount.sh

SHOP_NAME="YOUR_SHOP_NAME"
ACCESS_TOKEN="YOUR_ADMIN_API_TOKEN"
API_VERSION="2025-01"

# GraphQL mutation to create discount code
MUTATION='mutation {
  discountCodeBasicCreate(basicCodeDiscount: {
    title: "Tracksuit 100% Off"
    code: "TRACKSUIT100OFF"
    startsAt: "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"
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
          startsAt
          endsAt
          customerSelection {
            ... on DiscountCustomerAll {
              allCustomers
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
              }
            }
          }
          appliesOncePerCustomer
          usageCount
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}'

# Make API request
echo "Creating discount code TRACKSUIT100OFF..."
echo ""

RESPONSE=$(curl -s -X POST \
  "https://${SHOP_NAME}.myshopify.com/admin/api/${API_VERSION}/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: ${ACCESS_TOKEN}" \
  -d "{\"query\": $(echo "$MUTATION" | jq -Rs .)}")

# Check for errors
if echo "$RESPONSE" | jq -e '.data.discountCodeBasicCreate.userErrors | length > 0' > /dev/null; then
  echo "❌ Failed to create discount code:"
  echo "$RESPONSE" | jq '.data.discountCodeBasicCreate.userErrors'
  exit 1
else
  echo "✅ Discount code created successfully!"
  echo ""
  echo "Discount Code: TRACKSUIT100OFF"
  echo "Type: 100% percentage discount"
  echo "Applies to: All products"
  echo "Shipping: NOT included (customer pays shipping)"
  echo ""
  echo "Full response:"
  echo "$RESPONSE" | jq '.data.discountCodeBasicCreate.codeDiscountNode'
fi
