import { useUser } from '../../contexts/UserContext.jsx'
import CircularProgress from '@mui/material/CircularProgress'

import SignIn from '../account/SignIn/SignIn.jsx'

const InsightsView = () => {
  const { user, loading } = useUser()

  if (loading) return <CircularProgress />
  if (!user) return <SignIn />

  return <>This is InsightsView</>
}

export default InsightsView
