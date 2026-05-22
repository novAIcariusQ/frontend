import { Plus, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantLandingPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <MerchantRoutePlaceholder
        title={t('merchant.pages.landing.title')}
        description={t('merchant.pages.landing.description')}
        actions={
          <Link
            to="/merchant/shops/new"
            className="inline-flex items-center gap-2 rounded-md bg-market px-4 py-2 text-sm font-semibold text-white transition hover:bg-market/90"
          >
            <Plus size={16} aria-hidden="true" />
            {t('merchant.pages.landing.createShop')}
          </Link>
        }
      />
      <label className="flex items-center gap-3 rounded-md border border-ink/10 bg-white px-4 py-3 shadow-soft">
        <Search size={18} className="text-ink/45" aria-hidden="true" />
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder={t('merchant.pages.landing.search')}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/merchant/shops/shop-demo" className="rounded-md border border-ink/10 bg-white p-4 shadow-soft">
          <div className="mb-4 h-24 rounded-md bg-paper" />
          <h2 className="font-semibold text-ink">Mercearia Cebola</h2>
        </Link>
      </div>
    </div>
  )
}
