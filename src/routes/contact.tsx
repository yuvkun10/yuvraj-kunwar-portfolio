import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownRight, Check, Copy, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — Yuvraj Kunwar' },
      { name: 'description', content: 'Contact Yuvraj Kunwar about AI engineering, production software, and full-stack systems.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [copied, setCopied] = useState(false)
  const copiedTimeoutRef = useRef<number | undefined>(undefined)
  const email = 'maddoxuv@gmail.com'

  useEffect(() => () => window.clearTimeout(copiedTimeoutRef.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const fallback = document.createElement('textarea')
      fallback.value = email
      fallback.setAttribute('readonly', '')
      fallback.style.position = 'fixed'
      fallback.style.opacity = '0'
      document.body.appendChild(fallback)
      fallback.select()
      document.execCommand('copy')
      fallback.remove()
    }
    setCopied(true)
    window.clearTimeout(copiedTimeoutRef.current)
    copiedTimeoutRef.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="contact-page page-shell" id="main-content">
      <header className="contact-hero">
        <div><p className="eyebrow">Contact / Melbourne</p><h1>Start a conversation.</h1></div>
        <div className="contact-details">
          <div><span>Email</span><a href={`mailto:${email}`}>{email}</a></div>
          <div><span>Location</span><p>Melbourne, Australia</p></div>
          <div><span>Current role</span><p>AI Engineer · Dulcie Home Care</p></div>
          <div><span>Connect</span><p><a href="https://github.com/yuvkun10" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a><a href="https://www.linkedin.com/in/yuvraj-kunwar/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a></p></div>
        </div>
      </header>

      <section className="contact-action">
        <div><p>For AI engineering roles, product work, or a conversation about operational systems.</p><button type="button" onClick={copyEmail}>{copied ? <Check /> : <Copy />}{copied ? 'Copied' : 'Copy email'}</button></div>
        <a href={`mailto:${email}`}>Start a conversation <ArrowDownRight /></a>
      </section>
    </main>
  )
}
