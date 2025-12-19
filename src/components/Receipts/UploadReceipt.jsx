import { useRef, useState } from 'react'
import { Paper, Typography } from '@mui/material'

import { showUpload, uploadImage } from '../../utils/images.js'
import PollingComponent from './PollingComponent.jsx'

const UploadReceipt = ({ setIsStaleData }) => {
  const [waiting, setWaiting] = useState(false)
  const [uploadId, setUploadId] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleFileUpload = async (file) => {
    try {
      const { data } = await uploadImage(file)
      console.log('Uploaded:', data)
      setUploadId(data.id)
      setWaiting(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAnalysisCompleted = () => {
    setIsStaleData(true)
  }

  const handleFileChange = (e) => {
    handleFileUpload(e.target.files?.[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files[0]
    handleFileUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {waiting ? (
          <PollingComponent
            onData={handleAnalysisCompleted}
            apiCall={() => showUpload(uploadId)}
            wait_msecs="1000"
            setWaiting={setWaiting}
          />
        ) : (
          <Typography>Drop a receipt image or click to upload</Typography>
        )}
      </Paper>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </>
  )
}

export default UploadReceipt
