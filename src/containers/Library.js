import React from 'react'
import LibraryView from '../components/LibraryView'
import { connect } from 'react-redux'
import { getLibrary } from '../redux/actions/library'

class LibraryContainer extends React.Component {

  play = (item) => {
    this.props.history.push('/listen/' + item.id)
  }

  componentDidMount() {
    this.props.getLibrary()
  }

  render() {
    return (
      <LibraryView items={this.props.items} play={this.play}/>
    )
  }
}

const mapState = state => ({
  items: state.library
})

export default connect(mapState, {
  getLibrary
})(LibraryContainer)
