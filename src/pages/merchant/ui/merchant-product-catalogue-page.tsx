import { FileJson, FileSpreadsheet, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantProductCataloguePage() {
  const { t } = useTranslation()
  const { shopId = 'shop-demo' } = useParams()

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.productCatalogue.title')}
      description={t('merchant.pages.productCatalogue.description')}
      actions={
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-ink/10 px-4 py-2 text-sm font-semibold">
            <FileJson size={16} aria-hidden="true" />
            {t('merchant.pages.productCatalogue.importJson')}
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-ink/10 px-4 py-2 text-sm font-semibold">
            <FileSpreadsheet size={16} aria-hidden="true" />
            {t('merchant.pages.productCatalogue.importXlsx')}
          </button>
          <Link
            to={`/merchant/shops/${shopId}/products/new`}
            className="inline-flex items-center gap-2 rounded-md bg-market px-4 py-2 text-sm font-semibold text-white"
          >
            <Plus size={16} aria-hidden="true" />
            {t('merchant.pages.productCatalogue.createProduct')}
          </Link>
        </div>
      }
    />
  )
}
