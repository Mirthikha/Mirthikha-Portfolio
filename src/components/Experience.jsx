import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org + e.period}>
            <div className="meta">
              <span className="mono">{e.period}</span>
              <span className="muted">{e.mode}</span>
            </div>
            <div>
              <h3>{e.role}, {e.org}</h3>
              <ul className="bullets">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
