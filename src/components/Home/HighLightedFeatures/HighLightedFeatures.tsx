import { styled } from '@stitches/react'

const OtherInformationsSection = styled('div', {
  width: '1000px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px'
})

const OISTitle = styled('h2', {
  fontSize: '40px',
  marginTop: '70px'
})

const OISSubtitle = styled('p', {
  fontSize: '16px',
  color: 'Gray',
  marginTop: '15px'
})

const OISCardsSection = styled('div', {
  width: '100%',
  marginTop: '60px',
  display: 'flex',
  justifyContent: 'space-between'
})

const OISCardBox = styled('div', {
  width: '280px',
  height: '100px'
})

const OISCardTitle = styled('h4', {
  fontSize: '14px',
})

const OISCardText = styled('p', {
  fontSize: '12px',
  marginTop: '15px',
  color: 'Gray',
})

export function HighLightedFeatures () {
  return(
    <OtherInformationsSection>
      <OISTitle>HIGHLIGHTED FEATURES</OISTitle>
      <OISSubtitle>MAKE YOUR WORK EASIER AND FASTER!</OISSubtitle>

      <OISCardsSection>
        <OISCardBox>
          <OISCardTitle>FREE WORLDWIDE SHIPPING</OISCardTitle>
          <OISCardText>Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna.</OISCardText>
        </OISCardBox>
        
        <OISCardBox>
          <OISCardTitle>FREE WORLDWIDE SHIPPING</OISCardTitle>
          <OISCardText>Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna.</OISCardText>
        </OISCardBox>

        <OISCardBox>
          <OISCardTitle>FREE WORLDWIDE SHIPPING</OISCardTitle>
          <OISCardText>Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere urna.</OISCardText>
        </OISCardBox>
      </OISCardsSection>
    </OtherInformationsSection>
  )
}