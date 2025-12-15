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
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          m: 2,
          p: 2,
        }}
      >
        <Stack>
          <UploadReceipt />
          <ReceiptList />
        </Stack>
      </Box>
    </>
  )
}

export default Receipts
