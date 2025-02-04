import facebook from './../assets/images/facebook.png'
import instagram from './../assets/images/instagram.png'
import whatsapp from './../assets/images/whatsapp.png'
import github from './../assets/images/github.png'
import linkedin from './../assets/images/linkedin.png'
import SplineBMO from './SplineBMO'



export default function MainPage() {

  return (
    <section className="container">
      <div
        className='container-bmo'
      >
        <SplineBMO />
      </div>
      < div className="container-main" >
        <div className="container-main-sec1">
          <div className="container-main-sec1-information">
            <h1>Hi, I am José Santillan</h1>
            <h3>Frontend Web Developer</h3>
            <p>
              Me apasiona desarrollar soluciones tecnológicas innovadoras
              utilizando las herramientas más actuales. Disfruto enfrentar
              retos profesionales, siempre manteniendo la mente abierta.
              Me encanta contribuir al éxito de mi equipo de trabajo y
              considero fundamental mantener mi stack tecnológico actualizado
              de manera constante.
            </p>
          </div>
        </div>
        <div className="container-main-sec2">
          <a target="_blank" href="https://www.facebook.com/no.te.robes.mi.url/"><img src={facebook} alt="" /></a>
          <a target="_blank" href="https://www.instagram.com/josealfredo_santillanreyes/"><img src={instagram} alt="" /></a>
          <a target="_blank" href="https://wa.me/+526771053138"><img src={whatsapp} alt="" /></a>
          <a target="_blank" href="https://github.com/JoseSantillan97"><img src={github} alt="" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/jose-santillan-b9355a223/"><img src={linkedin} alt="" /></a>
        </div>
      </div >
    </section >
  )
} 