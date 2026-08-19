import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your inquiry. Todd will be in touch shortly.")
    }, 1500)
  }

  return (
    <section id="contact-form-section" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Context & Info */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            
            {/* What Happens Next */}
            <div>
              <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
                What Happens Next
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-10">
                A simple first step.
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-yellow-600 font-sans font-medium opacity-50 mt-1">01</span>
                  <div>
                    <h4 className="font-heading text-xl text-slate-900 mb-2">Tell us where you are.</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Share a little about your business, goals, or what you're considering.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="text-yellow-600 font-sans font-medium opacity-50 mt-1">02</span>
                  <div>
                    <h4 className="font-heading text-xl text-slate-900 mb-2">Have a conversation.</h4>
                    <p className="text-slate-600 font-light leading-relaxed">Talk through your situation and the questions you're trying to answer.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="text-yellow-600 font-sans font-medium opacity-50 mt-1">03</span>
                  <div>
                    <h4 className="font-heading text-xl text-slate-900 mb-2">Decide what's next.</h4>
                    <p className="text-slate-600 font-light leading-relaxed">If there's a fit, determine the most appropriate next step together. There is no need to arrive with a fully formed plan.</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Contact Information */}
            <div>
              <span className="text-yellow-600 font-sans tracking-[0.2em] uppercase text-sm font-medium mb-6 block">
                Contact Information
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-10">
                Prefer to reach out directly?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-slate-400 mb-1">Email</p>
                    <a href="mailto:todd@cibb.com" className="text-slate-900 font-medium hover:text-yellow-600 transition-colors">todd@cibb.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                    <p className="text-slate-900 font-medium">[Available Upon Request]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-slate-400 mb-1">Location</p>
                    <p className="text-slate-900 font-medium">Southwest Florida / Florida Gulf Coast</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - The Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 lg:p-16">
              
              <div className="mb-10">
                <h3 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                  Tell us a little about what you're considering.
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Your name" 
                      className="w-full h-12 px-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="you@example.com" 
                      className="w-full h-12 px-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      placeholder="Your phone number" 
                      className="w-full h-12 px-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      placeholder="Your company name" 
                      className="w-full h-12 px-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-slate-900">I'm interested in</label>
                  <div className="relative">
                    <select 
                      id="interest"
                      required
                      className="w-full h-12 px-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light appearance-none text-slate-900"
                    >
                      <option value="" disabled selected>Select one...</option>
                      <option value="selling">Selling a Business</option>
                      <option value="buying">Buying a Business</option>
                      <option value="valuation">Business Valuation</option>
                      <option value="exit_planning">Exit Planning</option>
                      <option value="business_opportunity">Business Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">Tell us more</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="Give us a little context about what you're considering..." 
                    className="w-full p-4 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-yellow-600 transition-shadow font-light resize-y"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center h-14 px-8 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground hover:bg-yellow-600 transition-colors duration-300 disabled:opacity-70 group"
                  >
                    {isSubmitting ? "Sending..." : "Request a Conversation"}
                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    Please don't include confidential financial or transaction information in this form. Detailed information can be discussed privately after an initial conversation.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
