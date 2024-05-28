import React from 'react'

export const FourthComponent = () => {

  //Funciones para el boton
  const handleClicked = (e) => {
    alert('Has hecho clic al boton');
  }

  const handleDoubleClicked = (e) => {
    alert('Has hecho doble clic al boton');
  }

  // Funciones para el mouse
  const handleMouseEnter = (e) => {
    console.log('Has entrado a la caja con el mouse');
  }

  const handleMouseLeave = (e) => {
    console.log('Has salido de la caja con el mouse');
  }

  const handleMouse = (e, text) => {
    alert("Has " + text + " caja");
  }

  const handleMouseCl = (e, text) => {
    console.log(`Has ${text} caja`);
  }

  // onFocus
  const insideInput = (e) => {
    console.log("Estás dentro del input, escribe tu nombre!!");
  }

  // onBlur
  const outsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!")
  }

  return (
    <div>
      <h2>Eventos en React</h2>

      {/* Evento click */}
      <button onClick={() => {
        console.log('Hola, soy el evento')
      }}>
        Has clic!!
      </button>
      <div>
        <button onClick={handleClicked}>
          Aquí tambien has clic !!
        </button>
      </div>

      {/* Evento doble click */}
      <button onDoubleClick={handleDoubleClicked}>
        Has doble clic!!
      </button>

      {/* Evento mouse enter y mouse leave */}
      <br /><hr />
      <div id="box">
        <div id='box1'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <p>Pasa el mouse por encima!!</p>
        </div>

        <div id='box2'
          onMouseEnter={e => handleMouse(e, 'entrado a')}
          onMouseLeave={e => handleMouse(e, 'salido de')}>
          <p>Pasa el mouse por encima!!</p>
        </div>

        <div id='box3'
          onMouseEnter={e => handleMouseCl(e, 'entrado a')}
          onMouseLeave={e => handleMouseCl(e, 'salido de')}>
          <p>Pasa el mouse por encima!!</p>
        </div>
      </div>

      {/* Evento focus y blur */}
      <div className='mt-4'>
        <input type="text"
          onFocus={insideInput}
          onBlur={outsideInput}
          placeholder='Escribe tu nombre'
        />
      </div>

    </div>
  )
}
