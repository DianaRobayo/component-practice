import React from 'react'

const MyComponent = () => {
  const name = "Inés";
  const repository = "https://github.com/inesmariao/component-practice";
  const student = {
    name: 'Carlos',
    lastname: 'Rocha',
    mobile: '0000',
    linkedin: 'https://www.linkedin.com/feed/'
  };
  return (
    <div>
      <hr />
      <p>Este es mi primer componente</p>
      <h2>Temas de React</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados-Hooks</li>
        <li>Comunicación</li>
      </ul>
      <hr />
      <h2>Datos del docente</h2>
      <p>Nombre: { name } </p>
      <p>Repositorio: </p>
      <p>{ repository } </p>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Nombre: { student.name }</p>
      <p>Apellido: { student.lastname }</p>
      <p>Celular: { student.mobile }</p>
      <p>Perfil Linkedin: { student.linkedin }</p>
    </div>
  )
}

export default MyComponent