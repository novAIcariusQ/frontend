export type OrderStatus = 'pending' | 'paid' | 'ready' | 'completed' | 'cancelled'

export type OrderItem = {
  id: string
  orderId: string
  productId?: string | null
  productTitle: string
  productLogo?: string | null
  quantity: number
  priceAtTime: number
}

export type Order = {
  id: string
  shopId: string
  userId?: string | null
  guestOrderId?: string | null
  customerName?: string | null
  customerEmail?: string | null
  customerPhone?: string | null
  totalAmount: number
  totalQuantity: number
  status: OrderStatus
  qrCodeData?: string | null
  createdAt: string
  items: OrderItem[]
}
