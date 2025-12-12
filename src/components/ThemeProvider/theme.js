import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8A00' },
    secondary: { main: '#006CD9' },
    background: { default: '#F8F9FB', paper: '#FFFFFF' },
    text: {
      primary: '#000000',
      secondary: '#4A4F55',
      disabled: '#9AA0A6',
    },
    success: { main: '#28A745' },
    warning: { main: '#DC3545' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0F2F5',
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF8A00' },
    secondary: { main: '#0D1A2D' },
    background: { default: '#111827', paper: '#1F2937' },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D5DB',
      disabled: '#6B7280',
    },
    success: { main: '#28A745' },
    warning: { main: '#DC3545' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#27334A',
        },
      },
    },
  },
})

export const neutralTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8A00' },
    secondary: { main: '#006CD9' },
    background: { default: '#F4F4F6', paper: '#FFFFFF' },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      disabled: '#9E9E9E',
    },
    success: { main: '#28A745' },
    warning: { main: '#DC3545' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#E7E9EC',
        },
      },
    },
  },
})
