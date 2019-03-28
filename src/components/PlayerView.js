import React from 'react'
import Footer from './Footer'

const PlayerView = ({media, voteUp, voteDown, skip}) => (
  <div>
    <h1>{media.name}</h1>
    <audio src={media.url} controls/><br/>
    <button onClick={voteUp}>like</button>
    <button onClick={voteDown}>hate</button>
    <button onClick={skip}>skip</button>
    <Footer/>
  </div>
)

export default PlayerView
