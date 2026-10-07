import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</div>
    </footer>
  )
}
