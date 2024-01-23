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
  color: ({ x, y, image }) => "#61dafb"
};
const particleOptionsCommunication: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#e10098"
};
const particleOptionsMore: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#AAAA0"
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

export default function Tooling() {
  return (
    <>
      <section className="tooling">
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
            <span>Basic knowledge</span>
            <p>HTML</p>
            <p>CSS and SASS</p>
            <p>Vanilla JS</p>
            <p>Bootstrap, material UI</p>
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
            <span>Frameworks/Libraries</span>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Vue.js</p>
            <p>JQuery</p>
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
            <span>client-server communication</span>
            <p>Rest API</p>
            <p>Graph QL</p>
            <p>SOAP</p>
            <p>AJAX</p>
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
            <span>More Tools</span>
            <p>Docker</p>
            <p>Mapbox</p>
            <p>Socket.IO</p>
            <p>Jenkins and CircleCI</p>
            <p>Git, Github and gitlab</p>
          </div>
        </div>
      </section>
    </>
  )
}