import { styled } from '@stitches/react'

const HeaderBar = styled('header', {
  width: '100%',
  height: '10vh',
  display: 'grid',
  gridTemplateColumns: '10% 70%',
  justifyContent: 'center',
  justifyItems: 'center'
})

const Logo = styled('header', {
  width: '120px',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px'
})
const Menu = styled('nav', {
  width: '100%',
  height: '10vh',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  fontSize: '30px'
})

const MenuItem = styled('div', {
  height: '10vh',
  margin: '0px 10px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    cursor: 'pointer'
  }
})

export function Header () {
  return(
    <HeaderBar>
      <Logo>WOOR</Logo>
      <Menu>
        <MenuItem>HOME</MenuItem>
        <MenuItem>SHOP</MenuItem>
        <MenuItem>PRODUCTS</MenuItem>
        <MenuItem>ABOUT US</MenuItem>
        <MenuItem>CONTACT</MenuItem>
        <MenuItem>BLOG</MenuItem>
        <MenuItem>GET FREE</MenuItem>
      </Menu>
    </HeaderBar>
  )
}