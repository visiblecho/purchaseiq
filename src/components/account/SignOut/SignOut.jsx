import { useUser } from '../../../contexts/UserContext.jsx'

const SignOut = () => {
  const { logout } = useUser()

  logout()

  return <>Logged out</>
}

export default SignOut
