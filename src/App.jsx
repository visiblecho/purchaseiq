import { Routes, Route } from 'react-router'
import { Button, Typography, Card, Container, Stack } from '@mui/material'

import { useTheme } from './components/ThemeProvider/ThemeProvider.jsx'
import { useTranslation } from 'react-i18next'

import ResponsiveAppBar from './components/AppBar/AppBar.jsx'
import AboutView from './components/AboutView/AboutView.jsx'
import SignUp from './components/account/SignUp/SignUp.jsx'
import SignIn from './components/account/SignIn/SignIn.jsx'
import AccountManagement from './components/account/AccountManagement/AccountManagement.jsx'
import DataView from './components/DataView/DataView.jsx'
import InsightsView from './components/InsightsView/InsightsView.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

function App() {
  const { themeName, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => i18n.changeLanguage(lng)

  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Container sx={{ mt: 5 }}>
          {/*}
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
          </Stack>

          <Card sx={{ p: 3 }}>
            <Typography variant="h6">This is a card!</Typography>
            <Typography variant="body2">
              Notice how card background matches the theme: {themeName}.
            </Typography>
          </Card>
          {*/}
          <Routes>
            <Route index element={<AboutView />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/account" element={<AccountManagement />} />
            <Route path="/data" element={<DataView />} />
            <Route path="/insights" element={<InsightsView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}

export default App
