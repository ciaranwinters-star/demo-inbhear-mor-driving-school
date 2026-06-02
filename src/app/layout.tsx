import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Inbhear Mor Driving School | Driving Lessons in Wicklow",
  description: "Expert driving instruction in Wicklow. IBT training, test preparation, and learner lessons. 5-star rated. Pass first time with Stephen.",
  openGraph: { title: "Inbhear Mor Driving School", description: "Expert driving instruction in Wicklow. IBT training, test preparation, and learner lessons. 5-star rated. Pass first time with Stephen.", type: "website" },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#003566" }} className="text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <a href="/" className="text-xl font-bold tracking-tight">Inbhear Mor Driving School</a>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/" className="font-medium text-sm" style={{ color: "#FFC300" }}>Home</a>
          <span className="opacity-50 cursor-default font-medium text-sm select-none">About</span>
          <span className="opacity-50 cursor-default font-medium text-sm select-none">Services</span>
          <span className="opacity-50 cursor-default font-medium text-sm select-none">Gallery</span>
          <span className="opacity-50 cursor-default font-medium text-sm select-none">Contact</span>
            </nav>
            <a href="https://wa.me/353872637116?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons" target="_blank" rel="noopener noreferrer" style={{ background: "#FFC300" }} className="text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
              💬 WhatsApp
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ background: "#003566" }} className="text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm opacity-80">
            <p className="font-bold text-base mb-1">Inbhear Mor Driving School</p>
            <p>Wicklow &bull; 087 263 7116</p>
            <p className="mt-4 opacity-50">&copy; {new Date().getFullYear()} Inbhear Mor Driving School. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
