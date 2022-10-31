import { styled } from '@stitches/react'

const FeaturedProductsSection = styled('div', {
  width: '1000px',
  height: '800px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px'
})

const FPSTitle = styled('h2', {
  fontSize: '40px',
  marginTop: '70px'
})

const FPSSubtitle = styled('h3', {
  fontSize: '16px',
  color: 'Gray',
  marginTop: '20px'
})

const FPSBoard = styled('div', {
  width: '100%',
  height: '350px',
  fontSize: '16px',
  display: 'flex',
  marginTop: '45px'
})

const FPSBoardItem = styled('div', {
  width: '320px',
  height: '320px',
  fontSize: '16px',
  background: 'Lightblue ',
  opacity: '0.4',
  margin: 'auto',
  '&:hover': {
    opacity: '0.8'
  }
})

const FPSText = styled('p', {
  maxWidth: '500px',
  fontSize: '14px',
  background: 'white',
  color: 'Gray',
  textAlign: 'center',
  lineHeight: '18px',
  marginTop: '50px'
})

const FPSButtons = styled('div', {
  width: '550px',
  height: '50px',
  fontSize: '16px',
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'space-between'
})

const FPSButton = styled('button', {
  width: '250px',
  height: '50px',
  fontSize: '16px',
  background: 'purple',
  opacity: '0.7',
  border: 'none',
  color: 'White',
  fontWeight: 'bold',
  '&:hover': {
    opacity: '1'
  }
})

export function FeaturedProducts () {
  return(
    <FeaturedProductsSection>
      <FPSTitle>FEATURED PRODUCTS</FPSTitle>
      <FPSSubtitle>BEST FROM THE BEST!</FPSSubtitle>
      <FPSBoard>
        <FPSBoardItem></FPSBoardItem>
        <FPSBoardItem></FPSBoardItem>
        <FPSBoardItem></FPSBoardItem>
      </FPSBoard>
      <FPSText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis congue turpis. Phasellus dictum mattis volutpat. Cras non placerat mi, et faucibus enim. Maecenas ut odio sit amet augue commodo pretium.
      </FPSText>
      <FPSButtons>
        <FPSButton>SEE MORE FEATURES</FPSButton>
        <FPSButton>CHECK ALL DESIGNS!</FPSButton>
      </FPSButtons>
    </FeaturedProductsSection>
  )
}