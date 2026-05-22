import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantProductCreatePage() {
  const { t } = useTranslation()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.createProduct.title')}
      description={t('merchant.pages.createProduct.description')}
    />
  )
}
