import me from './../assets/images/me.png'
import facebook from './../assets/images/facebook.png'
import instagram from './../assets/images/instagram.png'
import whatsapp from './../assets/images/whatsapp.png'
import github from './../assets/images/github.png'
import linkedin from './../assets/images/linkedin.png'

export default function MainPage() {
  return (
    <section className="main">
      <div className="main-sec1">
        <div className="main-sec1-information">
          <h1>Hi, I am José Santillan</h1>
          <h3>Frontend Web Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt alias minus maiores commodi sapiente exercitationem
            non ullam ut unde labore!
          </p>
        </div>
        <div className="main-sec1-image">
          {/* <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="Imagen de avatar masculino sonriendo" /> */}
          <img src={me} alt="Imagen de avatar masculino sonriendo" />
        </div>
      </div>
      <div className="main-sec2">
        <a target="_blank" href="https://www.facebook.com/no.te.robes.mi.url/"><img src={facebook} alt="" /></a>
        <a target="_blank" href="https://www.instagram.com/josealfredo_santillanreyes/"><img src={instagram} alt="" /></a>
        <a target="_blank" href="https://wa.me/+526771053138"><img src={whatsapp} alt="" /></a>
        <a target="_blank" href="https://github.com/JoseSantillan97"><img src={github} alt="" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/jose-santillan-b9355a223/"><img src={linkedin} alt="" /></a>
      </div>
    </section>
  )
} 