import React from 'react'
import PlayerView from '../components/PlayerView'
import { connect } from 'react-redux'
import { getLibrary } from '../redux/actions/library'

class PlayerContainer extends React.Component {

  componentDidMount() {

  }

  render() {
    let id = this.props.match.params.id
    let media = this.props.items[id]
    if (!media) return 'media not here'
    return <PlayerView media={media}/>
  }
}

const mapState = state => ({
  items: state.library
})

export default connect(mapState, {
  getLibrary
})(PlayerContainer)
