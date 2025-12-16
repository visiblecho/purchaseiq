import { useRef } from 'react'
import { Paper } from '@mui/material'

import { useTranslation } from 'react-i18next'

const UploadReceipt = () => {
  const { t } = useTranslation()

  const fileInputRef = useRef(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    console.log('Selected file:', file)
    // TODO: Request pre-signed URL from backend and upload to S3
  }

  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {t('uploadReceipt.drop')}
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
