import { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../contexts/ThemeProvider/ThemeProvider.jsx'

import {
  Box,
  Paper,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
} from '@mui/material'

import { UserContext } from '../../../contexts/UserContext.jsx'

const SettingsSection = ({ children }) => {
  return (
    <Grid>
      <Paper
        sx={{
          p: 2,
          height: '100%',
          width: '100%',
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <Stack spacing={2}>{children}</Stack>
      </Paper>
    </Grid>
  )
}

const AccountManagement = () => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('en_US')
  const changeLanguage = (language) => {
    setLanguage(language)
    i18n.changeLanguage(language)
  }

  const { themeName, toggleTheme } = useTheme()
  const [theme, setTheme] = useState('light')
  const changeTheme = (theme) => {
    setTheme(theme)
    toggleTheme(theme)
  }

  const { user } = useContext(UserContext)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t('accountManagement.accountSettings')}
      </Typography>

      <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
        <SettingsSection>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">
              {t('accountManagement.language')}
            </InputLabel>
            <Select
              labelId="language-select-label"
              value={language}
              label={t('accountManagement.language')}
              onChange={(event) => changeLanguage(event.target.value)}
            >
              <MenuItem value={'en_US'}>
                {t('accountManagement.english')}
              </MenuItem>
              <MenuItem value={'es_ES'}>
                {t('accountManagement.spanish')}
              </MenuItem>
              <MenuItem value={'de_DE'}>
                {t('accountManagement.german')}
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="theme-select-label">
              {t('accountManagement.theme')}
            </InputLabel>
            <Select
              labelId="theme-select-label"
              value={theme}
              label={t('accountManagement.theme')}
              onChange={(event) => changeTheme(event.target.value)}
            >
              <MenuItem value={'light'}>
                {t('accountManagement.light')}
              </MenuItem>
              <MenuItem value={'dark'}>{t('accountManagement.dark')}</MenuItem>
            </Select>
          </FormControl>
        </SettingsSection>

        <SettingsSection>
          <Stack spacing={2}>
            <TextField
              id="username"
              label={t('accountManagement.username')}
              variant="outlined"
            />
            <TextField
              id="email"
              label={t('accountManagement.email')}
              variant="outlined"
            />
          </Stack>
        </SettingsSection>

        {/* Paper 3: actions */}
        <SettingsSection>
          <Stack spacing={2}>
            <Button variant="outlined" disabled sx={{ height: 56 }}>
              {t('accountManagement.resetPassword')}
            </Button>
            <Button variant="outlined" disabled sx={{ height: 56 }}>
              {t('accountManagement.deleteAccount')}
            </Button>
          </Stack>
        </SettingsSection>
      </Grid>
    </>
  )
}

export default AccountManagement
