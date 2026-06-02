export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#003566" }}>Our Services</h1>
      <p className="text-gray-500 text-lg mb-12">Everything we offer at Inbhear Mor Driving School.</p>
      <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>IBT (Initial Basic Training)</h2>
        <p className="text-gray-600 leading-relaxed">Comprehensive 12-hour course covering essential driving skills and road safety.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Driving Lessons</h2>
        <p className="text-gray-600 leading-relaxed">One-to-one tuition tailored to your learning pace and test requirements.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Test Preparation</h2>
        <p className="text-gray-600 leading-relaxed">Focused coaching to build confidence and master exam technique.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Category A Training</h2>
        <p className="text-gray-600 leading-relaxed">Specialised instruction for motorcycle and category A driving tests.</p>
      </div>
      </div>
      <div className="mt-12 text-center">
        <a href="/contact" style={{ background: "#FFC300" }} className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">Book Now</a>
      </div>
    </div>
  )
}
