import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { Paper } from '@mui/material'

const UploadReceipt = () => {
  const { user } = useUser()
  return (
    <>
      <Paper sx={{ p: 2, mb: 2 }}>Drop a receipt image to capture data</Paper>
    </>
  )
}

export default UploadReceipt
