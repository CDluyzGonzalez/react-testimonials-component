import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonio from './componentes/Testimonio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre Klazia:</h1>
        <Testimonio
        nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. **Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en Klazia**. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. Klazia cambió mi vida.' />
        <Testimonio
        nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='**Klazia fue la puerta de entrada a mi carrera como desarrollador de software**. El plan de estudios bien estructurado llevó mis conociminetos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarroollador en una empresa increíble' />  
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender javaScript. He tomado muchos cursos, pero el curso de Klazia fue el que se quedó. **Estudiar javaScript, así como estructuras de datos y algoritmos en Klazia** me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
          <Testimonio 
          nombre='Carlos D Luyz'
          pais='Colombia'
          imagen='carlos'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='**Soy graduado de Klazia; esta formación me permitió avanzar en mi camino como desarrollador de software.** Me gradué en diciembre de 2025 y actualmente estoy iniciando mi carrera profesional como ingeniero de sistemas. Gracias a Klazia, continúo creciendo profesionalmente y me motiva saber que cada día estoy más cerca de alcanzar mi meta de obtener mi primer empleo como desarrollador de software, mientras continúo mis estudios en ingeniería de sistemas.' />
      </div>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
