import React from 'react'

const LibraryView = ({items, play}) => {
  return (
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
  )
}

export default LibraryView
