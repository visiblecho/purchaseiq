import { useState, useEffect } from 'react'
import { Paper, Button, ButtonGroup } from '@mui/material'

const ReceiptSummary = () => {
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    if (!confirmDelete) return

    const timer = setTimeout(() => {
      setConfirmDelete(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [confirmDelete])

  return (
    <Paper sx={{ p: 2 }}>
      Store Name Street Number, City, Country Date, Time Subtotal Tax Total
      Payment
      <ButtonGroup variant="text">
        <Button>View</Button>
        {confirmDelete ? (
          <Button color="warning">Confirm</Button>
        ) : (
          <Button onClick={() => setConfirmDelete(true)}>Delete</Button>
        )}
      </ButtonGroup>
    </Paper>
  )
}

export default ReceiptSummary
