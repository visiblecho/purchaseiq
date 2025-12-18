import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { Box, CircularProgress } from '@mui/material'

import SignIn from '../account/SignIn/SignIn.jsx'
import Receipts from '../Receipts/Receipts.jsx'
import ReceiptItems from '../ReceiptItems/ReceiptItems.jsx'

import { listReceipts, listReceiptItems } from '../../utils/receipts.js'

const DataView = () => {
  const { user } = useUser()

  const [receiptList, setReceiptList] = useState([])
  const [selectedReceiptId, setSelectedReceiptId] = useState(null)
  const [receipt, setReceipt] = useState([])

  // TODO: Error handling and loading states
  const [errorData, setErrorData] = useState({})
  const [isLoadingReceipts, setIsLoadingReceipts] = useState(true)
  const [isLoadingReceiptItems, setIsLoadingReceiptItems] = useState(true)

  // Fetch data from backend when a user is activated
  useEffect(() => {
    const getUsersReceipts = async () => {
      try {
        // Get a list of receipts
        const { data } = await listReceipts()
        setReceiptList(data)
        // If the list is not empty, select the first one's id
        if (data.length !== 0) setSelectedReceiptId(data[0].id)
      } catch (error) {
        console.log(error)
        setErrorData(error.response.data)
      } finally {
        setIsLoadingReceipts(false)
      }
    }
    getUsersReceipts()
  }, [user])

  // Fetch data from backend when a new receipt is selected
  useEffect(() => {
    const getReceiptItems = async () => {
      try {
        if (selectedReceiptId) {
          const { data } = await listReceiptItems(selectedReceiptId)
          setReceipt(data)
        }
      } catch (error) {
        console.log(error)
        setErrorData(error.response.data)
      } finally {
        setIsLoadingReceiptItems(false)
      }
    }
    getReceiptItems()
  }, [selectedReceiptId])

  // Protected route
  if (!user) return <SignIn />

  // Mount Receipts and ReceiptItems
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        width: '100%',
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 }}>
        {isLoadingReceipts ? (
          <CircularProgress />
        ) : (
          <Receipts
            receiptList={receiptList}
            selectedReceiptId={selectedReceiptId}
            setSelectedReceiptId={setSelectedReceiptId}
          />
        )}
      </Box>
      <Box sx={{ flex: 1 }}>
        {isLoadingReceiptItems ? (
          <CircularProgress />
        ) : (
          <ReceiptItems receipt={receipt} />
        )}
      </Box>
    </Box>
  )
}

export default DataView
