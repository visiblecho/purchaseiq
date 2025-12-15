import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import ReceiptItemDetail from './ReceiptItemDetail'

const ReceiptItemList = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} sx={{ fontSize: '1rem' }}>
          Description Quantity Total_Price
        </AccordionSummary>
        <AccordionDetails>
          <ReceiptItemDetail />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ReceiptItemList
