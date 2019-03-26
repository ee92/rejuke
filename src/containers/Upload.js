import React from 'react'
import UploadView from '../components/UploadView'
import { selectFile } from '../redux/actions/upload'
import { connect } from "react-redux"

class UploadContainer extends React.Component {

  scanFiles = (item, arr) => {
    arr.push(item)
    if (item.isFile) {
      console.log(item.file((file) => console.log(file)))
    }
    if (item.isDirectory) {
      let reader = item.createReader()
      reader.readEntries((entries) => {
        entries.forEach((entry) => {
          this.scanFiles(entry, arr)
        })
      })
    }
  }

  handleFileUpload = (items) => {
    let arr = []
    for (let i=0; i<items.length; i++) {
      let item = items[i].webkitGetAsEntry()
      if (item) {
        this.scanFiles(item, arr)
      }
    }
    console.log(arr)
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
