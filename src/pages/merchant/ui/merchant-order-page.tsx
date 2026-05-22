import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantOrderPage() {
  const { t } = useTranslation()

  return (
    <MerchantRoutePlaceholder title={t('merchant.pages.order.title')} description={t('merchant.pages.order.description')} />
  )
}
