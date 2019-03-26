import React from 'react'

const PlayerView = ({media, voteUp, voteDown, skip}) => (
  <div>
    <h1>{media.name}</h1>
    <audio src={media.url} controls/><br/>
    <button onClick={voteUp}>like</button>
    <button onClick={voteDown}>hate</button>
    <button onClick={skip}>skip</button>
  </div>
)

export default PlayerView
