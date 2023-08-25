import { Header } from './components/Header.tsx'
import { ErrorHeroSection } from './components/ErrorHeroSection.tsx'
import { Footer } from './components/Footer.tsx'

function App() {
  return (
    <main className="font-monospace min-h-screen flex flex-col justify-between pl-4 pr-4 py-6 py-md-10 px-md-20 max-w-7xl mx-auto">
      <Header />
      <ErrorHeroSection />
      <Footer />
    </main>
  )
}

export default App
