import React from 'react'
import Footer from './Footer'

const LibraryView = ({items = {}, play}) => {
  return (
    <div>
      <ul>
        {Object.keys(items).map((key) =>
          <li
            key={items[key].id}
            onClick={() => play(items[key])}
          >
            {items[key].name}
          </li>
        )}
      </ul>
      <Footer/>
    </div>
  )
}

export default LibraryView
