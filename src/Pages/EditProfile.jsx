import React from 'react'
import { createGlobalStyle } from 'styled-components'
import MainLayout from '../Layout/MainLayout'
import Editbox from './Editbox'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  margin:0px;
  overflow:hidden;
  font-family: 'Poppins', sans-serif;

}`

const Container = styled.div`
position:relative;
display:grid;
gap:10px;
// border: 1px solid red;
`
const EditProfile = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Container>
          <Editbox />
        </Container>
      </MainLayout>
    </>


  )
}

export default EditProfile