import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { CircularProgress, Paper, Stack, Box } from '@mui/material'

import UploadReceipt from './UploadReceipt.jsx'
import ReceiptList from './ReceiptList.jsx'

const Receipts = () => {
  const { user } = useUser()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 2,
          gap: 2,
        }}
      >
        <UploadReceipt />
        <ReceiptList />
      </Box>
    </>
  )
}

export default Receipts
