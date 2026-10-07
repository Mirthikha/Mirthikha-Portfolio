import Section from './Section.jsx'
import { profile as p } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="The quickest way to reach me is email.">
      <ul className="contact">
        <li><span>Email</span><a href={`mailto:${p.email}`}>{p.email}</a></li>
        <li><span>Phone</span><a href={`tel:${p.phone.replace(/-/g, '')}`}>{p.phone}</a></li>
        <li><span>GitHub</span><a href={p.github} target="_blank" rel="noreferrer">github.com/Mirthikha</a></li>
        <li><span>LinkedIn</span><a href={p.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/mirthikha-n-s</a></li>
        <li><span>Location</span>{p.location}</li>
      </ul>
    </Section>
  )
}
