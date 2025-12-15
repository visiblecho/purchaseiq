import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { CircularProgress } from '@mui/material'

import Receipts from '../Receipts/Receipts.jsx'
import SignIn from '../account/SignIn/SignIn.jsx'

const DataView = () => {
  const { user, loading } = useUser()

  if (loading) return <CircularProgress />
  if (!user) return <SignIn />

  return <Receipts />
}

export default DataView
