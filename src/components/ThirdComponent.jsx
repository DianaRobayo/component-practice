import React from 'react'
import PropTypes from 'prop-types'

// Desestructuracion
export const ThirdComponent = ({name, lastname, obj}) => {
// export const ThirdComponent = (props) => {

  //props = propiedades 
  //hooks = eventos
  // console.log('props', bloodGroup)
  return (
    <div>
      <h2>Comunicación entre componentes</h2>
      <ul>
        <li>{ name }</li>
        <li>{ lastname }</li>
        <li>{ obj.bloodGroup }</li>
        {/* <li>{props.name}</li>
        <li>{props.lastname}</li>
        {Object.entries(props.obj).map(([property, value]) => {
          return <li key={value}>
            {property}
          </li>
        })} */}
      </ul>
    </div>
  )
}

ThirdComponent.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  obj: PropTypes.object
}
