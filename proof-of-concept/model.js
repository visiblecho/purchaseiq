export const ReceiptSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Receipt",
  "type": "object",
  "properties": {
    "datetime": {
      "type": "object",
      "properties": {
        "raw": { "type": "string" },
        "iso_8601": { "type": "string" },
        "timezone": { "type": "string" }
      },
      "required": ["raw", "iso_8601", "timezone"]
    },

    "currency": {
      "type": "object",
      "properties": {
        "primary": { "type": "string" },
        "secondary": { "type": "string" },
        "exchange_rate": { "type": "number" },
        "symbol": { "type": "string" }
      },
      "required": ["primary", "symbol"]
    },

    "store": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "address": { "type": "string" }
      },
      "required": ["name"]
    },

    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "description": { "type": "string" },
          "raw_entry": { "type": "string" },
          "quantity": { "type": "number" },
          "price_per_unit": { "type": "number" },
          "total_price": { "type": "number" }
        },
        "required": ["description", "quantity", "price_per_unit", "total_price"]
      }
    },

    "totals": {
      "type": "object",
      "properties": {
        "subtotal": { "type": "number" },
        "total_tax": { "type": "number" },
        "total_price": { "type": "number" }
      },
      "required": ["total_price"]
    },

    "payment": {
      "type": "object",
      "properties": {
        "method": { "type": "string" },
        "amount_paid": { "type": "number" },
        "change_given": { "type": "number" }
      },
      "required": ["method", "amount_paid"]
    },

    "footer": {
      "type": "object",
      "properties": {
        "messages": {
          "type": "array",
          "items": { "type": "string" }
        },
        "receipt_number": { "type": "string" }
      },
      "required": []
    }
  },
  "required": ["datetime", "currency", "store", "items", "totals", "payment"]
}
