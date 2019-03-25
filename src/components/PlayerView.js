import React from 'react'

const PlayerView = ({media}) => (
  <div>
    <h1>{media.name}</h1>
    <audio src={media.url} controls/>
  </div>
)

export default PlayerView
