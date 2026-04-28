"use client"

import { ReactNode, useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18"

export default function I18nProvider({ children }: { children: ReactNode }) {
  // Tránh lỗi Hydration: Đảm bảo Client đã sẵn sàng
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <>{children}</>

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}