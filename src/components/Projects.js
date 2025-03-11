import Landrada from './../assets/images/landrada.webp'
import Landrada3 from './../assets/images/image-developments2.webp'
import laPopular from './../assets/images/lapopular.jpg'
import desktop2 from './../assets/images/desktopJS2.webp'
import logoMotoenvia from './../assets/images/logo-motoenvia.webp'
import logoLandrada from './../assets/images/logoLandrada.webp'
import seicti from './../assets/images/seicti.webp'
import logoSeicti from './../assets/images/logoSeicti.webp'
import logoPopular from './../assets/images/logoPopular.webp'
import logoJS from './../assets/images/logoJS.webp'
import Motoenvia4 from './../assets/images/img_completedata.svg'
import '../styles/components/_projects.scss'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={Motoenvia4} alt='Imagen panomarica de MotoEnvia' loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoMotoenvia} alt="Logo Motoenvia" loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Motoenvia</h3>
              <p class="card__job">Mensajería Express</p>
              <p class="card__bio">Somos el servicio de Mensajería en automóvil o motocicleta, enfocados en brindar seguridad, confianza y excelentes resultados en todos los envíos dentro de Quintana Roo.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">10 de Agosto 2021</p>
              <p class=""></p>
            </div>
          </div>
        </article>
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={Landrada} alt='Imagen panoramica de Landrada' loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoLandrada} alt="Short description" loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Landrada</h3>
              <p class="card__job">Oportunidades de inversión confiables</p>
              <p class="card__bio">En Landrada te brindamos oportunidades de inversión confiables que se ajustan a tus objetivos comerciales y patrimoniales.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">Feb 10 2018</p>
              <p class=""></p>
            </div>
          </div>
        </article>
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={Landrada3} alt='Imagen panomarima de Landrada' loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoLandrada} alt='Logo de Landrada' loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Landrada</h3>
              <p class="card__job">Oportunidades de inversión confiables</p>
              <p class="card__bio">En Landrada te brindamos oportunidades de inversión confiables que se ajustan a tus objetivos comerciales y patrimoniales.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">Feb 10 2018</p>
              <p class=""></p>
            </div>
          </div>
        </article>
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={seicti} alt="Imagen panoramica de SEICTI" loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoSeicti} alt="Logo de SEICTI" loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">SEICTI</h3>
              <p class="card__job">Servicio Estatal de Información Científica, Tecnológica e Innovación</p>
              <p class="card__bio">Es una plataforma para el registro de investigadores, instituciones y empresas con actividad en científica y tecnológica.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">Feb 10 2018</p>
              <p class=""></p>
            </div>
          </div>
        </article>
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={laPopular} alt="Imagen panoramica de La Popular" loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoPopular} alt="Logo de La Popular" loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">La Popular</h3>
              <p class="card__job">Siempre a los pies de usted</p>
              <p class="card__bio">Landing page para Zapatería La Popular del Estado de Durango.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">Feb 10 2018</p>
              <p class=""></p>
            </div>
          </div>
        </article>
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={desktop2} alt="Imagen panoramica de Portafolio" loading='lazy' />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoJS} alt="Logo de mi portafolio" loading='lazy' />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">José Santillán</h3>
              <p class="card__job">Portafolio de Frontend Web Developer</p>
              <p class="card__bio">Landing page creada con anterioridad para dar a conocer mis habilidades, las tecnologías que manejo, experiencia y contacto.</p>
            </div>
            <div class="card__footer">
              <p class="card__date">Feb 10 2018</p>
              <p class=""></p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}