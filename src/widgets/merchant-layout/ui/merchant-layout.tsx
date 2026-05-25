import { Home, Settings } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@widgets/language-switcher'

export function MerchantLayout() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <NavLink
            to="/merchant/shops"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-ink transition hover:bg-paper"
          >
            <Home size={18} aria-hidden="true" />
            {t('merchant.navigation.home')}
          </NavLink>
          <div className="flex items-center gap-2">
            <NavLink
              to="/merchant/settings"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-white text-ink transition hover:border-market hover:text-market"
              title={t('merchant.navigation.settings')}
              aria-label={t('merchant.navigation.settings')}
            >
              <Settings size={18} aria-hidden="true" />
            </NavLink>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
