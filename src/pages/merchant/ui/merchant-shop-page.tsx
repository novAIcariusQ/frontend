import { Package, Receipt } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantShopPage() {
  const { t } = useTranslation()
  const { shopId = 'shop-demo' } = useParams()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.shop.title')}
      description={t('merchant.pages.shop.description')}
      actions={
        <div className="flex flex-wrap gap-2">
          <Link
            to={`/merchant/shops/${shopId}/products`}
            className="inline-flex items-center gap-2 rounded-md bg-market px-4 py-2 text-sm font-semibold text-white"
          >
            <Package size={16} aria-hidden="true" />
            {t('merchant.pages.shop.products')}
          </Link>
          <Link
            to={`/merchant/shops/${shopId}/orders`}
            className="inline-flex items-center gap-2 rounded-md border border-ink/10 px-4 py-2 text-sm font-semibold text-ink"
          >
            <Receipt size={16} aria-hidden="true" />
            {t('merchant.pages.shop.orders')}
          </Link>
        </div>
      }
    />
  )
}
