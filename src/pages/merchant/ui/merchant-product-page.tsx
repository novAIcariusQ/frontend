import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantProductPage() {
  const { t } = useTranslation()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.product.title')}
      description={t('merchant.pages.product.description')}
    />
  )
}
