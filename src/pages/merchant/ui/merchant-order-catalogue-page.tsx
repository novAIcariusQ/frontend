import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantOrderCataloguePage() {
  const { t } = useTranslation()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.orderCatalogue.title')}
      description={t('merchant.pages.orderCatalogue.description')}
    />
  )
}
