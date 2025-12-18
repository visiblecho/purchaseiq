import { useState } from 'react'
import { Link } from 'react-router'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
} from '@mui/material'

import ReceiptIcon from '@mui/icons-material/Receipt'
import MenuIcon from '@mui/icons-material/Menu'

import { useUser } from '../../contexts/UserContext'

const ResponsiveAppBar = () => {
  // Routes
  const pages = [
    { label: 'Data', path: '/data', locked: true },
    { label: 'Insights', path: '/insights', locked: true },
    { label: 'About', path: '/about', locked: false },
  ]
  const settings = [
    { label: 'Account', path: '/account', locked: true },
    { label: 'Sign up', path: '/sign-up', locked: false },
    { label: 'Sign in', path: '/sign-in', locked: false },
    { label: 'Sign out', path: '/sign-out', locked: true },
  ]

  // Menus for routes
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { user } = useUser()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <ReceiptIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 200,
              textDecoration: 'none',
            }}
          >
            PurchaseIQ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages
                .filter((page) => page.locked === !!user)
                .map((page) => (
                  <MenuItem
                    key={page.path}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <ReceiptIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 200,
              textDecoration: 'none',
            }}
          >
            PurchaseIQ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages
              .filter((page) => page.locked === !!user)
              .map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>{user?.username.charAt(0).toUpperCase()}</Avatar>
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings
                .filter((setting) => setting.locked === !!user)
                .map((setting) => (
                  <MenuItem
                    key={setting.label}
                    component={Link}
                    to={setting.path}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting.label}
                    </Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
