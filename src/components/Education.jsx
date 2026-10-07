import Section from './Section.jsx'
import { education as e } from '../data.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="card">
        <h3>{e.degree}</h3>
        <p>{e.school}</p>
        <p className="muted"><span className="mono">{e.period}</span> · {e.cgpa}</p>
      </div>
    </Section>
  )
}
