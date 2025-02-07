import '../../styles/components/_navbar.scss'
import CV from '../../assets/docs/CV-Frontend-Developer-JOSÉ-SANTILLÁN.pdf'
export default function Navbar() {
  return (
    <section className='navbar'>
      <article className="navbar-logo">
        <a href="#main">José Santillán</a>
      </article>
      <article className="navbar-list">
        <ul>
          <li><a href="#tooling">Tooling</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </article>
      <article><a target="_blank" href={CV}>Download CV</a></article>
    </section>
  )
}