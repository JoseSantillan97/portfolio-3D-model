import '../../styles/components/_navbar.scss'
export default function Navbar() {
  return (
    <section className='navbar'>
      <div className="navbar-logo">
        <a href="#main">José Santillán</a>
      </div>
      <div className="navbar-list">
        <ul>
          <li><a href="#">Tooling</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Download CV</a></li>
        </ul>
      </div>
    </section>
  )
}