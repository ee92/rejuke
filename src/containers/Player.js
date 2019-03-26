import React from 'react'
import PlayerView from '../components/PlayerView'
import { connect } from 'react-redux'
import { getLibrary } from '../redux/actions/library'

class PlayerContainer extends React.Component {

  voteUp = () => {
    // let id = this.props.match.params.id
  }

  voteDown = () => {
    // let id = this.props.match.params.id
  }

  skip = () => {
    let items = this.props.libraryList
    let library = this.props.library
    let i = Math.floor(Math.random() * items.length)
    this.props.history.push('/listen/' + library[items[i]].id)
  }

  render() {
    let id = this.props.match.params.id
    let media = this.props.library[id]
    if (!media) return 'media not here'
    return (
      <PlayerView
        media={media}
        voteUp={this.voteUp}
        voteDown={this.voteDown}
        skip={this.skip}
      />
    )
  }
}

const mapState = state => ({
  library: state.library,
  libraryList: state.libraryList
})

export default connect(mapState, {
  getLibrary
})(PlayerContainer)
