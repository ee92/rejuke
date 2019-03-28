import React from 'react'
import DropFiles from './DropFiles'
import Footer from './Footer'

const UploadView = ({handleFileUpload}) => (
  <div>
    <DropFiles handleDrop={handleFileUpload}>
      <h1>drop music here</h1>
    </DropFiles>
    <Footer/>
  </div>
)

export default UploadView
