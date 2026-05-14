// src/pages/Contact.jsx
export default function Contact() {
    return (
      <div className="pt-20 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Get In Touch</h1>
  
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-900 p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-8">Request a Service</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border dark:bg-neutral-800" required />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border dark:bg-neutral-800" required />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border dark:bg-neutral-800" required />
              
              <select className="w-full p-4 rounded-xl border dark:bg-neutral-800">
                <option>Service Needed</option>
                <option>Electrical CAD Drafting</option>
                <option>Building Electrical Design</option>
                <option>Industrial Documentation</option>
                <option>Solar PV Design</option>
              </select>
  
              <textarea placeholder="Project Description" rows={5} className="w-full p-4 rounded-xl border dark:bg-neutral-800"></textarea>
  
              <button type="submit" className="w-full bg-accent hover:bg-[#00b8e0] text-black font-semibold py-4 rounded-2xl text-lg">
                Send Request
              </button>
            </form>
          </div>
  
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-2xl mb-4">Direct Contact</h3>
              <button 
                onClick={() => window.open('https://wa.me/255XXXXXXXXX', '_blank')}
                className="w-full bg-green-600 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-green-700"
              >
                💬 Chat on WhatsApp
              </button>
            </div>
  
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl">
              <p><strong>Dar es Salaam, Tanzania</strong></p>
              <p className="mt-4">📞 +255 XXX XXX XXX</p>
              <p>✉️ info@electrocad.co.tz</p>
            </div>
          </div>
        </div>
      </div>
    );
  }