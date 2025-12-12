import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../contexts/ThemeProvider/ThemeProvider.jsx'

import {
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

const SettingsSection = ({ children }) => (
  <Grid item xs={12}>
    <Paper
      sx={{
        p: 2,
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

const AccountManagement = () => {
  const { user, setUser } = useContext(UserContext)
  const { t, i18n } = useTranslation()
  const { themeName, toggleTheme } = useTheme()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setUser((prev) => ({ ...prev, language }))
  }

  const changeTheme = (theme) => {
    toggleTheme(theme)
    setUser((prev) => ({ ...prev, theme }))
  }

  const languages = [
    { code: 'en_US', label: t('accountManagement.english') },
    { code: 'es_ES', label: t('accountManagement.spanish') },
    { code: 'de_DE', label: t('accountManagement.german') },
  ]

  const themes = [
    { code: 'light', label: t('accountManagement.light') },
    { code: 'dark', label: t('accountManagement.dark') },
  ]

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t('accountManagement.accountSettings')}
      </Typography>

      <Grid container spacing={2} alignItems="stretch">
        {/* Language & Theme */}
        <SettingsSection>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">
              {t('accountManagement.language')}
            </InputLabel>
            <Select
              labelId="language-select-label"
              value={user.language}
              label={t('accountManagement.language')}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="theme-select-label">
              {t('accountManagement.theme')}
            </InputLabel>
            <Select
              labelId="theme-select-label"
              value={user.theme || themeName}
              label={t('accountManagement.theme')}
              onChange={(e) => changeTheme(e.target.value)}
            >
              {themes.map((t) => (
                <MenuItem key={t.code} value={t.code}>
                  {t.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SettingsSection>

        {/* User Info */}
        <SettingsSection>
          <TextField
            id="username"
            label={t('accountManagement.username')}
            variant="outlined"
            value={user.username}
            disabled
          />
          <TextField
            id="email"
            label={t('accountManagement.email')}
            variant="outlined"
            value={user.email}
            disabled
          />
        </SettingsSection>

        {/* Actions */}
        <SettingsSection>
          <Button variant="outlined" disabled sx={{ height: 56 }}>
            {t('accountManagement.resetPassword')}
          </Button>
          <Button variant="outlined" disabled sx={{ height: 56 }}>
            {t('accountManagement.deleteAccount')}
          </Button>
        </SettingsSection>
      </Grid>
    </>
  )
}

export default AccountManagement
