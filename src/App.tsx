import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Opportunities from "@/pages/Opportunities"
import Contact from "@/pages/Contact"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"
import Disclaimer from "@/pages/Disclaimer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
