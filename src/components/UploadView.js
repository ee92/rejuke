import React from 'react'

const UploadView = ({handleFileUpload}) => (
  <input type="file" onChange={handleFileUpload}/>
)

export default UploadView
