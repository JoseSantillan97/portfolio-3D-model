import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import Virtua from './Virtua';
import Devkoore from './Devkoore';
import Update from './Update';
import '../styles/components/_experience.scss'


export default function Experience() {
  return (
    <section className='experience'>
      <h2 className="experience-title">Experience</h2>
      <div className='experience-timeline'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Agosto 2023 - Diciembre 2023"
            iconStyle={{ background: '#007265', color: '#fff' }}
            icon={<Devkoore />}
          >
            <h3 className="vertical-timeline-element-title">Líder de Frontend</h3>
            <h4 className="vertical-timeline-element-subtitle">Landrada Landing Page - DevKoore</h4>
            <p className="vertical-timeline-element-text">
              Líder en Equipo de desarrollo Frontend para la creación de una landing page completamente dinámica,
              utilizando herramientas como: Next.js, React.js, Mapbox, GraphQL, Git, GitLab, MaterialUI entre otras.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243,.5)', color: '#fff' }}
            date="Enero 2023 - Julio 2023"
            iconStyle={{ background: '#007265', color: '#fff' }}
            icon={<Devkoore />}
          >
            <h3 className="vertical-timeline-element-title">Lider de Frontend</h3>
            <h4 className="vertical-timeline-element-subtitle">Landrada Administrador - DevKoore</h4>
            <p className="vertical-timeline-element-text">
              Desarrollo de un sistema administrador para inmobiliaria con múltiples módulos, se utilizaron
              herramientas como: Next.js, React.js, docker, RestAPI, GraphQL, MaterialUI, Mapbox, entre otras.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Agosto 2022 - Diciembre 2022"
            iconStyle={{ background: '#007265', color: '#fff' }}
            icon={<Devkoore />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Motoenvia - DevKoore</h4>
            <p className="vertical-timeline-element-text">
              Sistema para el envió de paquetes expres de un punto a otro en el área de Cancún. Se utilizarón herramientas
              para uso de localización como Google Maps Platform y su seguimiento en tiempo real, con Socket.IO, también
              Next.js, React.js, RestAPI, docker, etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Febrero 2020 - Octubre 2020"
            iconStyle={{ background: '#007265', color: '#fff' }}
            icon={<Virtua />}
          >
            <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">FAYAL - Virtua Mx</h4>
            <p className="vertical-timeline-element-text">
              Desarrollo de Sistema Adminitrador para compañía de construcción con múltiples módulos, desde permisos de construcción
              hasta el uso de material y maquinaria y personal de la empresa. Se utilizaron herramientas como Laravel, Vue.js, RestAPI
              MySQL, etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Enero 2019 - Enero 2020"
            iconStyle={{ background: '#007265', color: '#fff' }}
            icon={<Virtua />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">SEICTI - Virtua Mx</h4>
            <p className="vertical-timeline-element-text">
              Desarrollo de  una plataforma para el registro de investigadores, instituciones y empresas con actividad en
              científica y tecnológica. Se desarrollo utilizando herramientas como Vue.js, RestAPI, HTML5, CSS3, Bootstrap, etc
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: '#007265', color: '#fff' }}
            contentStyle={{ color: '#fff' }}
            date="Continúo Actualizándome"
            icon={<Update />}
          />
        </VerticalTimeline>
      </div>
    </section >
  )
}