import type { ReactNode } from 'react'

type MerchantRoutePlaceholderProps = {
  title: string
  description: string
  actions?: ReactNode
}

export function MerchantRoutePlaceholder({ title, description, actions }: MerchantRoutePlaceholderProps) {
  return (
    <section className="rounded-md border border-ink/10 bg-white p-6 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">{description}</p>
        </div>
        {actions}
      </div>
    </section>
  )
}
