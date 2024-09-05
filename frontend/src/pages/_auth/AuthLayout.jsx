import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div id="AuthLayout">
      <Outlet />
    </div>
  )
}

export default AuthLayout