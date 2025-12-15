import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { Box, CircularProgress } from '@mui/material'

import SignIn from '../account/SignIn/SignIn.jsx'
import Receipts from '../Receipts/Receipts.jsx'
import ReceiptItems from '../ReceiptItems/ReceiptItems.jsx'

const DataView = () => {
  const { user, loading } = useUser()

  if (loading) return <CircularProgress />
  if (!user) return <SignIn />

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Receipts />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ReceiptItems />
      </Box>
    </Box>
  )
}

export default DataView
