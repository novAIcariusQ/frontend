import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { tokenStorage } from '@shared/lib/token-storage'
import { MerchantRoutePlaceholder } from './merchant-route-placeholder'

export function MerchantSettingsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const logout = () => {
    tokenStorage.clearToken()
    navigate('/login/sign-in')
  }

  return (
    <MerchantRoutePlaceholder
      title={t('merchant.pages.settings.title')}
      description={t('merchant.pages.settings.description')}
      actions={
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-clay/30 px-4 py-2 text-sm font-semibold text-clay"
          onClick={logout}
        >
          <LogOut size={16} aria-hidden="true" />
          {t('common.logout')}
        </button>
      }
    />
  )
}
