import React from 'react'

export const Child = ({ name, setName, message }) => {

  const sendMessage = () => {
    message('Este es el mensaje del Hijo');
  }

  const changeName = () => {
    setName('Cambio nombre');
  }

  return (
    <div>
      {name}
      <div>
      </div>
        <button onClick={sendMessage}>
          Enviar mensaje
        </button>
        <button onClick={changeName}>
          Cambio mensaje 2
        </button>
    </div>
  )
}
