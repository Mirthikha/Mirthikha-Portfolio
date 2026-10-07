import Section from './Section.jsx'
import { projects } from '../data.js'

const Stack = ({ items }) => <ul className="chips small">{items.map((s) => <li key={s}>{s}</li>)}</ul>
const Links = ({ links }) =>
  links?.length ? (
    <p className="links">{links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</p>
  ) : null

function Featured({ p }) {
  return (
    <article className="card featured">
      <h3>{p.title}</h3>
      <p className="lede">{p.summary}</p>
      <div className="cols">
        <div>
          <h4>What I built</h4>
          <p>{p.built}</p>
          <h4>Result</h4>
          <p>{p.result}</p>
        </div>
        <div>
          <h4>The interesting parts</h4>
          <ul className="bullets">{p.deep.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </div>
      <Stack items={p.stack} />
      <Links links={p.links} />
    </article>
  )
}

function Major({ p }) {
  return (
    <article className="card major">
      <h3>{p.title}</h3>
      <p className="muted">{p.summary}</p>
      <p>{p.built}</p>
      <ul className="bullets">{p.deep.map((d) => <li key={d}>{d}</li>)}</ul>
      <Stack items={p.stack} />
      <Links links={p.links} />
    </article>
  )
}

function Minor({ p }) {
  return (
    <article className="card minor">
      <h3>{p.title}</h3>
      <p className="muted">{p.summary}</p>
      <Stack items={p.stack} />
    </article>
  )
}

export default function Projects() {
  const by = (t) => projects.filter((p) => p.tier === t)
  return (
    <Section id="projects" title="Projects">
      {by('featured').map((p) => <Featured key={p.title} p={p} />)}
      <div className="grid-major">{by('major').map((p) => <Major key={p.title} p={p} />)}</div>
      <h3 className="sub">More projects</h3>
      <div className="grid-minor">{by('minor').map((p) => <Minor key={p.title} p={p} />)}</div>
    </Section>
  )
}
