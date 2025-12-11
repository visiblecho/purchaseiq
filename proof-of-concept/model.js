export const ReceiptSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Receipt',
  type: 'object',
  properties: {
    datetime: {
      type: 'object',
      properties: {
        raw: { type: 'string' },
        iso_8601: { type: 'string' },
        timezone: { type: 'string' },
      },
      required: ['raw', 'iso_8601', 'timezone'],
    },

    currency: {
      type: 'object',
      properties: {
        primary: { type: 'string' },
        secondary: { type: 'string' },
        exchange_rate: { type: 'number' },
        symbol: { type: 'string' },
      },
      required: ['primary', 'symbol'],
    },

    store: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        street: { type: 'string' },
        number: { type: 'string' },
        zip: { type: 'string' },
        city: { type: 'string' },
        country: { type: 'string' },
      },
      required: ['name', 'city', 'country'],
    },

    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          description: { type: 'string' },
          tags: {
            type: 'array',
            items: { type: 'string' },
          },
          raw_entry: { type: 'string' },
          quantity: { type: 'number' },
          price_per_unit: { type: 'number' },
          total_price: { type: 'number' },
        },
        required: [
          'description',
          'tags',
          'raw_entry',
          'quantity',
          'price_per_unit',
          'total_price',
        ],
      },
    },

    totals: {
      type: 'object',
      properties: {
        subtotal: { type: 'number' },
        total_tax: { type: 'number' },
        total_price: { type: 'number' },
      },
      required: ['total_price'],
    },

    payment_method: { type: 'string' },
  },

  required: [
    'datetime',
    'currency',
    'store',
    'items',
    'totals',
    'payment_method',
  ],
}
