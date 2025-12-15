import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import {
  Typography,
  AccordionActions,
  Button,
  ButtonGroup,
} from '@mui/material'

const ReceiptItemDetails = () => {
  const { user } = useUser()
  return (
    <>
      <Typography sx={{ fontSize: '.875rem' }}>price per unit, tags, raw_entry</Typography>
      <AccordionActions>
        <ButtonGroup variant="text">
          <Button>Edit</Button>
          <Button disabled>Discard</Button>
          <Button disabled>Save</Button>
        </ButtonGroup>
      </AccordionActions>
    </>
  )
}

export default ReceiptItemDetails
