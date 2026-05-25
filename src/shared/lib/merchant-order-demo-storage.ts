import type { Order, OrderStatus } from '@entities/order'

const DEMO_ORDERS_KEY = 'cebola.demoMerchantOrders'

export const fallbackOrders: Order[] = [
  {
    id: 'c7ed1d87-58c1-4f76-8c71-97720f22fd38',
    shopId: 'shop-demo',
    guestOrderId: '48291375',
    customerName: 'Maria Silva',
    customerEmail: 'maria@example.com',
    customerPhone: '+351 900 000 000',
    totalAmount: 10.7,
    totalQuantity: 3,
    status: 'paid',
    qrCodeData: 'order:c7ed1d87-58c1-4f76-8c71-97720f22fd38',
    createdAt: new Date().toISOString(),
    items: [
      {
        id: 'item-1',
        orderId: 'c7ed1d87-58c1-4f76-8c71-97720f22fd38',
        productId: 'prod-1',
        productTitle: 'Organic onions',
        productLogo: null,
        quantity: 2,
        priceAtTime: 2.4,
      },
      {
        id: 'item-2',
        orderId: 'c7ed1d87-58c1-4f76-8c71-97720f22fd38',
        productId: 'prod-2',
        productTitle: 'Goat cheese',
        productLogo: null,
        quantity: 1,
        priceAtTime: 5.9,
      },
    ],
  },
]

export function getDemoMerchantOrders() {
  const stored = localStorage.getItem(DEMO_ORDERS_KEY)

  if (!stored) {
    return fallbackOrders
  }

  try {
    const parsed = JSON.parse(stored) as Order[]
    return parsed.length > 0 ? parsed : fallbackOrders
  } catch {
    return fallbackOrders
  }
}

export function getDemoMerchantShopOrders(shopId: string) {
  return getDemoMerchantOrders().filter(order => order.shopId === shopId)
}

export function getDemoMerchantOrder(shopId: string, orderId: string) {
  return getDemoMerchantShopOrders(shopId).find(order => order.id === orderId) ?? null
}

export function upsertDemoMerchantOrder(order: Order) {
  const existingOrders = getDemoMerchantOrders()
  const nextOrders = existingOrders.some(item => item.id === order.id)
    ? existingOrders.map(item => (item.id === order.id ? order : item))
    : [order, ...existingOrders]

  localStorage.setItem(DEMO_ORDERS_KEY, JSON.stringify(nextOrders))
  return nextOrders
}

export function updateDemoMerchantOrderStatus(shopId: string, orderId: string, status: OrderStatus) {
  const order = getDemoMerchantOrder(shopId, orderId)

  if (!order) {
    return null
  }

  const nextOrder = { ...order, status }
  upsertDemoMerchantOrder(nextOrder)
  return nextOrder
}
