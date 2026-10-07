import Section from './Section.jsx'
import { achievements } from '../data.js'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements and certifications">
      <dl className="ach">
        {achievements.map((a) => (
          <div key={a.title}>
            <dt>{a.title}</dt>
            <dd>{a.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
