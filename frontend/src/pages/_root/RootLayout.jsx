import { Outlet } from 'react-router-dom'

const RootLayout = ({ showNavbarAndFooter }) => {
  return (
    <div id='RootLayout'>
      <Outlet />
    </div>
  )
}

export default RootLayout