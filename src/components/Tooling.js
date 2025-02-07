import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image"
import react from './../logo.svg'
import basic from './../assets/images/html.svg'
import clientServer from './../assets/images/graphql.svg'
import octocat from './../assets/images/github-tile.svg'
import '../styles/components/_tooling.scss'

const particleOptionsBasic: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 80;
  },
  color: ({ x, y, image }) => "#e34f26",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => .15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};
const particleOptionsFrameworks: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => .15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }

};
const particleOptionsCommunication: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#e10098",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => .15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }

};
const particleOptionsMore: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#AAAA0",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => .15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }

};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

export default function Tooling() {
  return (
    <>
      <section id="tooling" className="tooling">
        <h2>Tooling</h2>
        <div className="tooling-tools">
          <div className="tooling-tools-particles">
            <div>
              <ParticleImage
                src={basic}
                width="350"
                scale={2}
                entropy={20}
                maxParticles={4200}
                particleOptions={particleOptionsBasic}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor="rgba(25,29,31,0)"
              />
            </div>
            <span className="tooling-tools-particles-title">Basic knowledge</span>
            <p className="tooling-tools-particles-tech">HTML</p>
            <p className="tooling-tools-particles-tech">CSS and SASS</p>
            <p className="tooling-tools-particles-tech">Vanilla JS</p>
            <p className="tooling-tools-particles-tech">Bootstrap, material UI</p>
          </div>
          <div className="tooling-tools-particles">
            <div>
              <div>
                <ParticleImage
                  src={react}
                  width="350"
                  scale={2}
                  entropy={20}
                  maxParticles={4200}
                  particleOptions={particleOptionsFrameworks}
                  mouseMoveForce={motionForce}
                  touchMoveForce={motionForce}
                  backgroundColor="rgba(25,29,31,.0)"
                />
              </div>
            </div>
            <span className="tooling-tools-particles-title">Frameworks/Libraries</span>
            <p className="tooling-tools-particles-tech">React.js</p>
            <p className="tooling-tools-particles-tech">Next.js</p>
            <p className="tooling-tools-particles-tech">Vue.js</p>
            <p className="tooling-tools-particles-tech">JQuery</p>
            <p className="tooling-tools-particles-tech">Spline 3D</p>
          </div>
          <div className="tooling-tools-particles">
            <div>
              <div>
                <ParticleImage
                  src={clientServer}
                  width="350"
                  scale={3}
                  entropy={20}
                  maxParticles={4200}
                  particleOptions={particleOptionsCommunication}
                  mouseMoveForce={motionForce}
                  touchMoveForce={motionForce}
                  backgroundColor="rgba(25,29,31,.0)"
                />
              </div>
            </div>
            <span className="tooling-tools-particles-title">client-server communication</span>
            <p className="tooling-tools-particles-tech">Rest API</p>
            <p className="tooling-tools-particles-tech">Graph QL</p>
            <p className="tooling-tools-particles-tech">SOAP</p>
            <p className="tooling-tools-particles-tech">AJAX</p>
          </div>
          <div className="tooling-tools-particles">
            <div>
              <div>
                <ParticleImage
                  src={octocat}
                  width="350"
                  scale={.5}
                  entropy={20}
                  maxParticles={4200}
                  particleOptions={particleOptionsMore}
                  mouseMoveForce={motionForce}
                  touchMoveForce={motionForce}
                  backgroundColor="rgba(25,29,31,.0)"
                />
              </div>
            </div>
            <span className="tooling-tools-particles-title">More Tools</span>
            <p className="tooling-tools-particles-tech">Docker</p>
            <p className="tooling-tools-particles-tech">Mapbox</p>
            <p className="tooling-tools-particles-tech">Socket.IO</p>
            <p className="tooling-tools-particles-tech">Jenkins and CircleCI</p>
            <p className="tooling-tools-particles-tech">Git, Github and gitlab</p>
          </div>
        </div>
      </section>
    </>
  )
}