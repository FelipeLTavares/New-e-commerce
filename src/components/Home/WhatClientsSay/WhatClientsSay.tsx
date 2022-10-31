import { styled } from '@stitches/react'

const WhatClientsSaySection = styled('div', {
  width: '1000px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px'
})

const WCSSTitle = styled('h2', {
  fontSize: '40px',
  marginTop: '70px'
})

const WCSSSubtitle = styled('p', {
  fontSize: '16px',
  color: 'Gray',
  marginTop: '15px'
})

const WCSSBoard = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '45px',
})

const WCSSCard  = styled('div', {
  width: '240px',
  height: '180px',
  fontSize: '16px',
  transition: 'all ease 0.3s',
  '&:hover': {
    boxShadow: '0px 0px 20px 20px #E8E8E8',
    borderBottom: '4px solid black'
  }
})

const WCSSCardText  = styled('div', {
  fontSize: '16px',
  textAlign: 'center',
  marginTop: '20px',
  color: 'Gray',
})

const WCSSCardName = styled('p', {
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'Black',
  marginTop: '20px'
})

const WCSSCardProfession = styled('p', {
  fontSize: '14px',
  color: 'Gray',
  textAlign: 'center',
  margin: 'auto'
})

export function WhatClientsSay () {
  return(
    <WhatClientsSaySection>
      <WCSSTitle>WHAT CLIENTS SAY</WCSSTitle>
      <WCSSSubtitle>A GREAT PLACE TO SHOW BEST OPINIONS</WCSSSubtitle>
      <WCSSBoard>
                <WCSSCard>
                  <WCSSCardText>
                  "I would also like to say thank you to all your staff. Rife WP Theme has completely fulfill our expectations."
                  </WCSSCardText>
                  <WCSSCardName>DANA BAILEY</WCSSCardName>
                  <WCSSCardProfession>DESIGNER</WCSSCardProfession>
                </WCSSCard>

                <WCSSCard>
                  <WCSSCardText>
                  "I would also like to say thank you to all your staff. Rife WP Theme has completely fulfill our expectations."
                  </WCSSCardText>
                  <WCSSCardName>DANA BAILEY</WCSSCardName>
                  <WCSSCardProfession>DESIGNER</WCSSCardProfession>
                </WCSSCard>

                <WCSSCard>
                  <WCSSCardText>
                  "I would also like to say thank you to all your staff. Rife WP Theme has completely fulfill our expectations."
                  </WCSSCardText>
                  <WCSSCardName>DANA BAILEY</WCSSCardName>
                  <WCSSCardProfession>DESIGNER</WCSSCardProfession>
                </WCSSCard>
      </WCSSBoard>
    </WhatClientsSaySection>
  )
}