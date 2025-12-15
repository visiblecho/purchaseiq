import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import FilterReceiptList from './FilterReceiptList'
import ReceiptDetail from './ReceiptDetail'

const ReceiptList = () => {
  return (
    <>
      <Stack>
        <FilterReceiptList />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{ fontSize: '1rem' }}
          >
            Sum
          </AccordionSummary>
          <AccordionDetails>
            <ReceiptDetail />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{ fontSize: '1rem' }}
          >
            Sum
          </AccordionSummary>
          <AccordionDetails>
            <ReceiptDetail />
          </AccordionDetails>
        </Accordion>
      </Stack>
    </>
  )
}

export default ReceiptList
