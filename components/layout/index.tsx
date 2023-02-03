import Footer from 'components/footer'
import Navbar from '@/components/navbar/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}