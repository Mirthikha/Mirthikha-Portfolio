import useReveal from '../hooks/useReveal.js'

// Shared wrapper: gives every section an id (for the nav), a heading and a reveal-on-scroll fade.
export default function Section({ id, title, intro, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap reveal" ref={ref}>
        <h2 id={`${id}-title`}>{title}</h2>
        {intro && <p className="lede">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
