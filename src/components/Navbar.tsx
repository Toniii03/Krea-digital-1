import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg border border-krea-gold/40 rotate-45 scale-75 group-hover:scale-90 transition-transform" />
        <span className="relative text-krea-gold font-extrabold text-xl">K</span>
      </div>
      <span
        className={`font-bold text-lg tracking-wide transition-colors ${
          scrolled ? 'text-krea-blue' : 'text-white'
        }`}
      >
        Krea Digital
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = scrolled
    ? 'text-krea-blue/85 hover:text-krea-gold'
    : 'text-white/85 hover:text-krea-gold'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-krea-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo scrolled={scrolled} />
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors tracking-wide ${linkClass}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex px-5 py-2.5 bg-krea-gold text-white text-sm font-semibold rounded-full hover:bg-krea-gold/90 transition-colors"
        >
          Hablemos
        </a>
        <button
          type="button"
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-krea-blue' : 'text-white'}`}
          aria-label="Menú"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            menu?.classList.toggle('hidden')
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`hidden md:hidden mx-4 rounded-xl p-4 mb-4 ${
          scrolled
            ? 'bg-white border border-krea-blue/10 shadow-md'
            : 'glass'
        }`}
      >
        <ul className="flex flex-col gap-3">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`block text-sm font-medium py-2 transition-colors ${
                  scrolled ? 'text-krea-blue/90 hover:text-krea-gold' : 'text-white/90 hover:text-krea-gold'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
