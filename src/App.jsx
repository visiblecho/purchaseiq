import React from 'react'
import { Button, Typography, Card, Container, Stack } from '@mui/material'
import { useTheme } from './components/ThemeProvider/ThemeProvider.jsx'

function App() {
  const { themeName, toggleTheme } = useTheme()

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Current Theme: {themeName}
      </Typography>

      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="contained" onClick={() => toggleTheme('light')}>
          Light Fintech
        </Button>
        <Button variant="contained" onClick={() => toggleTheme('dark')}>
          Premium Dark
        </Button>
        <Button variant="contained" onClick={() => toggleTheme('neutral')}>
          Neutral Minimal
        </Button>
      </Stack>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6">This is a card!</Typography>
        <Typography variant="body2">
          Notice how card background matches the theme.
        </Typography>
      </Card>
    </Container>
  )
}

export default App
