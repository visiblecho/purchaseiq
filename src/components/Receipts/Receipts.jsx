import { Box } from '@mui/material'

import UploadReceipt from './UploadReceipt.jsx'
import ReceiptList from './ReceiptList.jsx'

const Receipts = ({
  receiptList,
  selectedReceiptId,
  setSelectedReceiptId,
  setIsStaleData,
}) => {
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
        <UploadReceipt setIsStaleData={setIsStaleData} />
        <ReceiptList
          receiptList={receiptList}
          selectedReceiptId={selectedReceiptId}
          setSelectedReceiptId={setSelectedReceiptId}
        />
      </Box>
    </>
  )
}

export default Receipts
