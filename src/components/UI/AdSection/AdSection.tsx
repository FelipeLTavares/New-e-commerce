import { styled } from '@stitches/react'

const Advertisement = styled('div', {
  width: '100%',
  height: '60vh',
  background: 'LightGray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '10vh'
})

export function AdSection () {
  return(
    <Advertisement>
      PROPAGANDA
    </Advertisement>
  )
}