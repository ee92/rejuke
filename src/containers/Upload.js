import React from 'react'
import UploadView from '../components/UploadView'
import { itemsDropped } from '../redux/actions/upload'
import { connect } from "react-redux"

class UploadContainer extends React.Component {

  handleFileUpload = (items) => {
    this.props.itemsDropped(items)
  }

  render() {
    return (
      <UploadView
        handleFileUpload={this.handleFileUpload}
        items={this.props.uploadList}
      />
    )
  }
}

const mapState = state => ({
  uploadList: state.uploadList
})

export default connect(mapState, {
  itemsDropped
})(UploadContainer)
