import { useEffect, useState } from 'react'

import { Paper, List, ListItemButton, Box, Typography } from '@mui/material'

// Descoped
// import FilterReceiptList from './FilterReceiptList'

const ReceiptList = ({
  receiptList,
  selectedReceiptId,
  setSelectedReceiptId,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(
    receiptList.findIndex((item) => item.id === selectedReceiptId),
  )

  useEffect(() => {
    const receiptId = receiptList[selectedIndex].id
    setSelectedReceiptId(receiptId)
  }, [selectedIndex, receiptList, setSelectedReceiptId])

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <>
      <Paper sx={{ p: 2 }}>
        {/* <FilterReceiptList /> */}
        <List component="nav">
          {receiptList.map((receipt, index) => (
            <ListItemButton
              key={receipt.id}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'left',
                    flex: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {new Date(receipt.datetime_parsed).toLocaleDateString(
                    'en-US', // TODO: Depend on user's locale choice
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    },
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'left',
                    flex: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {receipt.store_name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'right',
                    flex: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {`${receipt.total_price} ${receipt.currency_primary}`}
                </Typography>
              </Box>
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </>
  )
}

export default ReceiptList
