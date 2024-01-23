import Landrada from './../assets/images/landrada.webp'
import Landrada2 from './../assets/images/landrada2.webp'
import Landrada3 from './../assets/images/image-developments2.webp'
import Landrada4 from './../assets/images/landrada4.webp'
import logoDevkoore from './../assets/images/logo-atomico.webp'
import Motoenvia from './../assets/images/map_placeholder.svg'
import Motoenvia2 from './../assets/images/inicio_img.png'
import Motoenvia4 from './../assets/images/img_completedata.svg'
import logoMotoenvia from './../assets/images/logo-motoenvia.png'
import logoLandrada from './../assets/images/logoLandrada.png'
import logoLandrada2 from './../assets/images/logoLandrada2.png'
// import logoLandrada2 from './../assets/images/logo-landrada-footer.png'
import seicti from './../assets/images/seicti.png'
import logoSeicti from './../assets/images/logoSeicti.png'
import laPopular from './../assets/images/lapopular.jpg'
import laPopular2 from './../assets/images/lapopular2.jpg'
import logoPopular from './../assets/images/logoPopular.png'
import logoJS from './../assets/images/logoJS.png'
import desktop from './../assets/images/desktopJS.jpg'
import desktop2 from './../assets/images/desktopJS2.jpg'

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <article className="projects-container-project">
          <div class="card" data-effect="zoom">
            <figure class="card__image">
              <img src={Motoenvia4} />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoMotoenvia} alt="Logo Motoenvia" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Motoenvia</h3>
              <p class="card__job">Oportunidades de inversión confiables</p>
              <p class="card__bio">Sistema administrador con multiples módulos.</p>
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
              <img src={Landrada} />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoLandrada} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Landrada</h3>
              <p class="card__job">Oportunidades de inversión confiables</p>
              <p class="card__bio">Sistema administrador con multiples módulos.</p>
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
              <img src={Landrada3} />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoLandrada2} />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Landrada</h3>
              <p class="card__job">Oportunidades de inversión confiables</p>
              <p class="card__bio">Landing page con contenido dinámico e interacciones con el mapa.</p>
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
              <img src={seicti} alt="Short description" />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoSeicti} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Neil Armstrong</h3>
              <p class="card__job">astronaut & engineer</p>
              <p class="card__bio"> American astronaut, engineer, and the first person to walk on the Moon.</p>
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
              {/* <img src={laPopular} alt="Short description" /> */}
              <img src={desktop2} alt="Short description" />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoPopular} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Neil Armstrong</h3>
              <p class="card__job">astronaut & engineer</p>
              <p class="card__bio"> American astronaut, engineer, and the first person to walk on the Moon.</p>
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
              <img src={desktop} alt="Short description" />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={logoJS} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">Neil Armstrong</h3>
              <p class="card__job">astronaut & engineer</p>
              <p class="card__bio"> American astronaut, engineer, and the first person to walk on the Moon.</p>
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