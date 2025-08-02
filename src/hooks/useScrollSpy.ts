import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      let currentId: string | null = null

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            currentId = id
          }
        }
      }

      setActiveId(currentId)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [ids, offset])

  return activeId
}
