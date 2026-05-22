import type { Order, OrderStatus } from '@entities/order'
import type { Product, ProductFormValues } from '@entities/product'
import type { Shop, ShopFormValues } from '@entities/shop'
import { apiClient } from './base'

type MerchantListParams = {
  page?: number
  limit?: number
  q?: string
}

export type MerchantListResponse<T> = {
  items: T[]
  page?: number
  limit?: number
  total?: number
}

export const merchantApi = {
  getShops(params?: MerchantListParams) {
    return apiClient
      .get<Shop[] | MerchantListResponse<Shop>>('/merchant/shops', { params })
      .then(response => response.data)
  },
  getShop(shopId?: string) {
    if (shopId) {
      return apiClient.get<Shop | null>(`/merchant/shops/${shopId}`).then(response => response.data)
    }

    return apiClient.get<Shop | null>('/merchant/shop').then(response => response.data)
  },
  createShop(payload: ShopFormValues) {
    return apiClient.post<Shop>('/merchant/shop', payload).then(response => response.data)
  },
  updateShop(shopId: string, payload: ShopFormValues) {
    return apiClient.put<Shop>(`/merchant/shops/${shopId}`, payload).then(response => response.data)
  },
  getProducts(shopId?: string, params?: MerchantListParams) {
    if (shopId) {
      return apiClient
        .get<Product[] | MerchantListResponse<Product>>(`/merchant/shops/${shopId}/products`, { params })
        .then(response => response.data)
    }

    return apiClient.get<Product[]>('/merchant/products').then(response => response.data)
  },
  getProduct(shopId: string, productId: string) {
    return apiClient
      .get<Product | null>(`/merchant/shops/${shopId}/products/${productId}`)
      .then(response => response.data)
  },
  createProduct(payload: ProductFormValues, shopId?: string) {
    if (shopId) {
      return apiClient.post<Product>(`/merchant/shops/${shopId}/products`, payload).then(response => response.data)
    }

    return apiClient.post<Product>('/merchant/products', payload).then(response => response.data)
  },
  updateProduct(productId: string, payload: ProductFormValues, shopId?: string) {
    if (shopId) {
      return apiClient
        .put<Product>(`/merchant/shops/${shopId}/products/${productId}`, payload)
        .then(response => response.data)
    }

    return apiClient.put<Product>(`/merchant/products/${productId}`, payload).then(response => response.data)
  },
  deleteProduct(productId: string, shopId?: string) {
    if (shopId) {
      return apiClient.delete<void>(`/merchant/shops/${shopId}/products/${productId}`).then(response => response.data)
    }

    return apiClient.delete<void>(`/merchant/products/${productId}`).then(response => response.data)
  },
  getOrders(shopId?: string, params?: MerchantListParams) {
    if (shopId) {
      return apiClient
        .get<Order[] | MerchantListResponse<Order>>(`/merchant/shops/${shopId}/orders`, { params })
        .then(response => response.data)
    }

    return apiClient.get<Order[]>('/merchant/orders').then(response => response.data)
  },
  getOrder(shopId: string, orderId: string) {
    return apiClient.get<Order | null>(`/merchant/shops/${shopId}/orders/${orderId}`).then(response => response.data)
  },
  updateOrderStatus(shopId: string, orderId: string, status: OrderStatus) {
    return apiClient
      .put<Order>(`/merchant/shops/${shopId}/orders/${orderId}`, { status })
      .then(response => response.data)
  },
}
