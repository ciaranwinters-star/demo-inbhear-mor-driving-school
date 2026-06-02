export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "85vh", background: "#003566" }} className="text-white relative flex items-center">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #003566f2 0%, #003566aa 60%, #00356666 100%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 py-24 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">Pass Your Driving Test First Time in Wicklow</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl leading-relaxed">Expert instruction with Stephen—ace your test with confidence and proven results.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/353872637116?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons" target="_blank" rel="noopener noreferrer" style={{ background: "#FFC300" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-2xl inline-flex items-center justify-center gap-2">
              💬 WhatsApp Us
            </a>
            <a href="tel:0872637116" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition inline-flex items-center justify-center gap-2">
              📞 087 263 7116
            </a>
          </div>
          <a href="https://search.google.com/local/reviews?placeid=ChIJ_ROOpz3BZ0gR-EpiL4uCBuk" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-white bg-opacity-15 backdrop-blur-sm rounded-full px-5 py-3 text-sm hover:bg-opacity-25 transition">
            <span className="text-yellow-300 text-lg">★</span>
            <span className="font-bold text-base">5</span>
            <span className="opacity-90">20 reviews on Google</span>
            <span className="opacity-70">→</span>
          </a>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">⭐ 5 (20 reviews)</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">📍 Wicklow</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">📞 087 263 7116</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">✓ Locally trusted</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#003566" }}>What we offer</h2>
          <p className="text-center text-gray-500 mb-12">Built for Wicklow — clear, simple, dependable.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Intensive IBT Training</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Comprehensive preparation for your Irish Braking Test with clear, tailored instruction.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">⏱</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Category A Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Expert guidance to master Category A driving skills and exam requirements.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">💡</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Standard Driving Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Flexible one-to-one tuition covering all aspects of safe, confident driving.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">🤝</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Test Preparation Packages</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Focused coaching designed to get you test-ready and pass on your first attempt.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Real Google reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#003566" }}>What our customers say</h2>
          <p className="text-center text-gray-500 mb-12">Real reviews, straight from Google.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Just did my ibt with Stephen, and it was an absolutely great experience, you cant fault his knowledge of teaching capabilities. Would highly recommend, priced competitively, very nice yo work with, an&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— Eric Rountree</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;IBT training done with Stephen yesterday and what a pleasure to be trained by someone who is a wealth of knowledge and passion. He explained everything clearly and simple. The whole IBT was throughly&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— Niall Scully Wedding Photographer</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;When it comes to IBT, let me tell you about Stephan – an absolute legend! He took charge of getting me ready for my Cat. A. His teaching's solid, tailored lessons, and savvy tips. I aced the exam on m&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— Marcin Rusiecki</p>
        </div>
          </div>
        <div className="text-center mt-10">
          <a href="https://search.google.com/local/reviews?placeid=ChIJ_ROOpz3BZ0gR-EpiL4uCBuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#003566" }}>
            Read all 20 reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#FFC300" }} className="py-20 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your first lesson with Stephen today.</h2>
          <p className="text-lg mb-10 opacity-95">Tap WhatsApp and we'll get straight back to you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/353872637116?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl inline-flex items-center justify-center gap-2" style={{ color: "#FFC300" }}>
              💬 WhatsApp Us
            </a>
            <a href="tel:0872637116" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">📞 087 263 7116</a>
          </div>
        </div>
      </section>
    </>
  )
}
