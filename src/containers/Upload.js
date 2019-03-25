import React from 'react'
import UploadView from '../components/UploadView'
import { selectFile } from '../redux/actions/upload'
import { connect } from "react-redux"

class UploadContainer extends React.Component {

  handleFileUpload = (e) => {
    this.props.selectFile(e.target.files[0])
  }

  render() {
    return (
      <UploadView
        handleFileUpload={this.handleFileUpload}
      />
    )
  }
}

const mapState = state => ({
  file: state.upload
})

export default connect(mapState, {
  selectFile
})(UploadContainer)
