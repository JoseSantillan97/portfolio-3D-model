import facebook from './../assets/images/facebook.png'
import instagram from './../assets/images/instagram.png'
import whatsapp from './../assets/images/whatsapp.png'
import github from './../assets/images/github.png'
import linkedin from './../assets/images/linkedin.png'
import SplineBMO from './SplineBMO'
import '../styles/components/_main-section.scss'

export default function MainPage() {

  return (
    <section id="main" className="container">
      <div className='container-bmo'>
        <SplineBMO />
      </div>
      < div className="container-main" >
        <div className="container-main-sec1">
          <div className="container-main-sec1-information">
            <h1 className="container-main-sec1-information-name">Hi, I am
              <span className='container-main-sec1-information-myname'> José Santillan</span>
            </h1>
            <h3 className="container-main-sec1-information-title">Frontend Web Developer</h3>
            <p className="container-main-sec1-information-text">🚀 Me apasiona la tecnología moderna.</p>
            <p className="container-main-sec1-information-text">🎯 Disfruto superar desafíos.</p>
            <p className="container-main-sec1-information-text">🔄 Actualizo mi stack constantemente.</p>
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