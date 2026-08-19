import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<div className="container py-24 text-center font-heading text-3xl">Services Page (Coming Soon)</div>} />
          <Route path="/opportunities" element={<div className="container py-24 text-center font-heading text-3xl">Opportunities Page (Coming Soon)</div>} />
          <Route path="/contact" element={<div className="container py-24 text-center font-heading text-3xl">Contact Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
