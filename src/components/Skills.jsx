import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-grid">
        {skills.map((g) => (
          <div key={g.title} className="skill-group">
            <h3>{g.title}</h3>
            <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
