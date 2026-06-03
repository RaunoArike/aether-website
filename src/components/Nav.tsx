import { useState } from 'react'

interface NavProps {
  links?: { label: string; href: string }[]
}

export default function Nav({ links }: NavProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">Aether</a>
          {links && links.length > 0 && (
            <>
              <ul className="nav-links">
                {links.map(({ label, href }) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
              <button
                className={`hamburger${open ? ' active' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </>
          )}
        </div>
      </nav>

      {links && links.length > 0 && (
        <div className={`mobile-nav${open ? ' active' : ''}`}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
        </div>
      )}
    </>
  )
}
