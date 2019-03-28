import React from 'react'
import DropFiles from '../components/DropFiles'

const UploadView = ({handleFileUpload, items, test}) => (
  <DropFiles handleDrop={handleFileUpload}>
    <h1>drop music here</h1>
    <button onClick={test}>test</button>
    {items.map((item) =>
      <div>{item.name}</div>
    )}
  </DropFiles>
)

export default UploadView
