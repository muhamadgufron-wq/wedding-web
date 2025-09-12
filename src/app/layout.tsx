import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RouteLoader from "@/components/RouteLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RouteLoader>
          <main>{children}</main>
        </RouteLoader>
        <Footer />
      </body>
    </html>
  )
}
