import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"

// Temporary Home Component until we build the real one
function HomePlaceholder() {
  return <div className="container py-24 text-center font-heading text-3xl">Home Page (Coming Soon)</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePlaceholder />} />
          <Route path="/about" element={<div className="container py-24 text-center font-heading text-3xl">About Page (Coming Soon)</div>} />
          <Route path="/services" element={<div className="container py-24 text-center font-heading text-3xl">Services Page (Coming Soon)</div>} />
          <Route path="/opportunities" element={<div className="container py-24 text-center font-heading text-3xl">Opportunities Page (Coming Soon)</div>} />
          <Route path="/contact" element={<div className="container py-24 text-center font-heading text-3xl">Contact Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
