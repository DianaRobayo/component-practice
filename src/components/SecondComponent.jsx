import React from 'react'

const SecondComponent = () => {
  const books = [
    'Harry Potter y la piedra filosofal',
    'Harry Potter y la cámara secreta',
    'Harry Potter y el prisionero de Azkaban',
    'Harry Potter y el caliz de fuego'
  ];

  // const books = [];
  return (
    <div>
      <h2>Listado de libros</h2>
      <ul>
        { books.length >= 1 ? (
          books.map((book, index) => {
            return <li key={index}>
              {book}
            </li>
          })
        ) : 'No existen libros'}
      </ul>
    </div>
  )
}

export default SecondComponent