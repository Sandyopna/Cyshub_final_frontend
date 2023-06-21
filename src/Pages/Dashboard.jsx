import React from 'react'
import TotEvents from './totevents'
import styled from 'styled-components'
import TotProject from './TotProject'
import MyCYSCOM from './MyCYSCOM'
import Contribution from './Contribution'
import Workhours from './Workhours'
import Sparkspace from './Sparkspace'
import Ideaboard from './Ideaboard'
import MainLayout from '../Layout/MainLayout'
import { createGlobalStyle } from 'styled-components'

const Container = styled.div`
position:relative;
display:grid;
gap:10px;
// border: 1px solid red;
`
const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;
  font-family : 'Poppins', sans-serif;
  margin:0px;

}`
const Dashboard = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Container>
          <Contribution />
          <Workhours />
          <MyCYSCOM />
          <TotProject />
          <TotEvents />
          <Sparkspace />
          <Ideaboard/>
        </Container>
      </MainLayout>
    </>


  )
}

export default Dashboard
