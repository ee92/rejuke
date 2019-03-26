import React from 'react'
import DropFiles from '../components/DropFiles'

const UploadView = ({handleFileUpload}) => (
  <DropFiles handleDrop={handleFileUpload}>
    <h1>drop music here</h1>
  </DropFiles>
)

export default UploadView
