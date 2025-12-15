import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { Box, TextField } from '@mui/material'

const FilterReceiptList = () => {
  const { user } = useUser()
  return (
    <>
      <TextField
        id="filter-terms"
        label="Filter terms"
        variant="outlined"
        fullWidth
        disabled
      />
    </>
  )
}

export default FilterReceiptList
