import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantShopCreatePage() {
  const { t } = useTranslation()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.createShop.title')}
      description={t('merchant.pages.createShop.description')}
    />
  )
}
