import { styled } from '@stitches/react'

const RecentProdutcsSection = styled('div', {
  width: '1000px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px'
})

const RPSTitle = styled('h2', {
  fontSize: '40px',
  marginTop: '70px'
})

const RPSSubtitle = styled('p', {
  fontSize: '16px',
  color: 'Gray',
  marginTop: '15px'
})

const RPSBoard = styled('div', {
  width: '100%',
  fontSize: '16px',
  display: 'flex',
  marginTop: '45px',
  flexWrap: 'wrap'
})

const RPSBoardItem = styled('div', {
  width: '240px',
  height: '240px',
  fontSize: '16px',
  background: 'Lightblue ',
  opacity: '0.4',
  margin: '5px',
  '&:hover': {
    opacity: '0.8'
  }
})

export function RecentdProducts () {
  return(
    <RecentProdutcsSection>
      <RPSTitle>RECENT PRODUCTS</RPSTitle>
      <RPSSubtitle>OUR HOT ARRIVALS!</RPSSubtitle>
      <RPSBoard>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
        <RPSBoardItem></RPSBoardItem>
      </RPSBoard>
    </RecentProdutcsSection>
  )
}