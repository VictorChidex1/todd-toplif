import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Scrolls the window to the top whenever the route pathname changes.
 * This ensures that navigating to a new page always starts at the top.
 */
export function ScrollToTopOnNav() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
