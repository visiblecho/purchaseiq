import OpenAI from 'openai'
import fs from "fs"
import 'dotenv/config'
import { ReceiptSchema } from './model.js'


/*
const jsonSchema = `
{
  "datetime": {
    "raw": "3.12.2025 8:01",
    "iso_8601": "2025-12-03T08:01:00+01:00",
    "timezone": "Europe/Berlin"
  },

  "currency": {
    "primary": "EUR",
    "secondary": null,
    "exchange_rate": null,
    "symbol": "€"
  },

  "store": {
    "name": null,
    "address": null,

    "identifiers": {
      "vat_id": null,           // EU, UK VAT number
      "company_number": null,   // UK Companies House number
      "ein": null,              // US EIN
      "abn": null,              // Australia Business Number
      "gstin": null,            // India GST ID
      "tax_id_other": null      // Any local/tax number
    },

    "contact": {
      "phone": null,
      "email": null,
      "website": null
    },

    "additional_info": {}
  },

  "items": [
    {
      "description": null,
      "raw_entry": null,

      "quantity": null,
      "price_per_unit": null,
      "total_price": null,

      "identifiers": {
        "sku": null,
        "upc": null,
        "ean": null,
        "plu": null,
        "internal_code": null
      },

      "tax": {
        "rate": null,
        "amount": null,
        "type": null       // "VAT", "SalesTax", "GST", etc.
      }
    }
  ],

  "taxes": {
    "model": "VAT",            // VAT | SalesTax | GST | Mixed | Unknown

    "line_items": [
      {
        "tax_rate": null,
        "tax_amount": null,
        "net_amount": null,
        "tax_type": "VAT"      // VAT or SalesTax etc.
      }
    ],

    "total_tax": null
  },

  "totals": {
    "subtotal": null,
    "discounts": null,
    "service_charge": null,
    "rounding": null,

    "total_before_tax": null,    
    "total_tax": null,
    "total_price": null
  },

  "payment": {
    "method": null,        // cash | card | mobile | voucher | mixed | unknown

    "amount_paid": null,
    "change_given": null,

    "currency": {
      "payment_currency": null,   // e.g. paid in USD, receipt in EUR
      "payment_amount_original": null,
      "exchange_rate": null
    },

    "card": {
      "brand": null,
      "last4": null,
      "auth_code": null,
      "transaction_id": null
    },

    "tip": {
      "amount": null,
      "percentage": null
    }
  },

  "transaction_details": {
    "transaction_ids": [],
    "terminal_id": null,
    "register": null,
    "cashier": {
      "name": null,
      "id": null
    }
  },

  "footer": {
    "messages": [],
    "return_policy": null,
    "additional_info": {}
  }
}
`
*/

// Create the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

// Uploade the receipt file
const receipt = await openai.files.create({
  file: fs.createReadStream("./receipts/receipt-1.jpg"),
  purpose: "vision"
});

// Measure response time
const start = Date.now()

// Call OpenAI
const response = await openai.responses.create({
  model: 'gpt-4.1-mini',
  
  // The actual prompt
  input: [
    {
      role: 'developer',
      content: `You are an expert for cosnumer receipts.
        You know all formats: all industries, all countries, everything.
        You can extract all relevant information from the image of an receipt.
        You ALWAYS and ONLY and STRICTLY in the following JSON format.
        You avoid surrounding backticks and similar: plain JSON.
        You provide ACCURATE and PRECISE information. If you don't know the information, you respind with unknown.`
    },
    {
      role: 'developer',
      content: JSON.stringify(ReceiptSchema),
    },
    {
        role: 'developer',
        content: 'If the provided input is not an image of a receipt, abort processing and return an error.'
    },
    {
      role: 'user',
      content: [
        { type: 'input_text', text: 'Provide all information from the following receipt image as structured JSON format.'},
        { type: 'input_image', file_id: receipt.id },
      ],
    },
  ],
})

const end = Date.now()

// Show results
console.log(`Msecs: ${end-start}`)
console.log(`Total tokens: ${response.usage.total_tokens} (${response.model})`)

try {
    const data = JSON.parse(response.output_text)
    console.log(data)
} catch (error) {
    console.error(error)
}

