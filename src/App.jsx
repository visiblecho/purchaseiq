import React from 'react'
import { Button, Typography, Card, Container, Stack } from '@mui/material'
import { useTheme } from './components/ThemeProvider/ThemeProvider.jsx'
import { useTranslation } from 'react-i18next'

function App() {
  const { themeName, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        {t('greeting')}
      </Typography>

      <Stack direction="row" spacing={2} mb={4}>
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('es')}>Español</Button>
      </Stack>

      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="contained" onClick={() => toggleTheme('light')}>
          {t('theme.light')}
        </Button>
        <Button variant="contained" onClick={() => toggleTheme('dark')}>
          {t('theme.dark')}
        </Button>
        <Button variant="contained" onClick={() => toggleTheme('neutral')}>
          {t('theme.neutral')}
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
