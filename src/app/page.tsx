"use client"
export default function Home() {
  return (
    <>
      <section style={{ background: "#003566" }} className="text-white py-28 px-4 relative">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Pass Your Driving Test First Time in Wicklow</h1>
          <p className="text-xl mb-10 opacity-90">Expert instruction with Stephen. Ace your test with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0872637116" style={{ background: "#FFC300" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
              📞 Call 087 263 7116
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">
              Get a Free Quote
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm">
            <span className="text-yellow-300">★</span>
            <span className="font-bold">5</span>
            <span className="opacity-80">(20 Google reviews)</span>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#003566" }}>What We Offer</h2>
          <p className="text-center text-gray-500 mb-12">Everything you need, right here in Wicklow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>IBT (Initial Basic Training)</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Comprehensive 12-hour course covering essential driving skills and road safety.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Driving Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">One-to-one tuition tailored to your learning pace and test requirements.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Test Preparation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Focused coaching to build confidence and master exam technique.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Category A Training</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Specialised instruction for motorcycle and category A driving tests.</p>
        </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#003566" }}>What Our Customers Say</h2>
          <p className="text-center text-gray-500 mb-12">Don't just take our word for it</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"Stephen's knowledge and teaching ability are exceptional. Competitive pricing, great to work with."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>Eric, Wicklow</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"A wealth of knowledge and passion. Everything explained clearly and simply throughout."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>Niall, Wicklow</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"Solid teaching, tailored lessons, savvy tips. I aced my Category A exam first time."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>Marcin, Wicklow</p>
        </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFC300" }} className="py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Book your lessons with Stephen today. Pass first time.</h2>
          <p className="text-lg mb-8 opacity-90">Call us today or send a message and we'll get back to you fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0872637116" className="bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition" style={{ color: "#FFC300" }}>
              📞 087 263 7116
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
