import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ScrollToTop } from "./ScrollToTop"
import { ScrollToTopOnNav } from "./ScrollToTopOnNav"

export function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <ScrollToTopOnNav />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
