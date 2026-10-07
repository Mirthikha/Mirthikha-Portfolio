import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <p className="hero-name">{profile.name}</p>
        <h1>{profile.headline}</h1>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projects">View my projects</a>
          <a className="btn" href="./resume.pdf" download="Mirthikha_N_S_Resume.pdf">Download resume</a>
        </div>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}
