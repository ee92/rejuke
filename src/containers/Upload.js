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
      />
    )
  }
}

export default connect(null, {itemsDropped})(UploadContainer)
