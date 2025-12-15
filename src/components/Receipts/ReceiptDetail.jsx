import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import {
  Typography,
  AccordionActions,
  ButtonGroup,
  Button,
} from '@mui/material'

const Upload = () => {
  const { user } = useUser()
  return (
    <>
      <Typography sx={{ fontSize: '.875rem' }}>Lorem ipsum dolor</Typography>
      <AccordionActions>
          <Button>Remove</Button>
      </AccordionActions>
    </>
  )
}

export default Upload
