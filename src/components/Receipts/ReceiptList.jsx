import { useState } from 'react'

import { Paper, List, ListItemButton, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import FilterReceiptList from './FilterReceiptList'

const ReceiptList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  return (
    <>
      <Paper sx={{ p: 2 }}>
        <FilterReceiptList />
        <List component="nav">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="body1" sx={{ textAlign: 'left', flex: 1 }}>
                Dec 15
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', flex: 1 }}>
                Supermarket
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'right', flex: 1 }}>
                20.95€
              </Typography>
            </Box>
          </ListItemButton>
        </List>
      </Paper>
    </>
  )
}

export default ReceiptList
