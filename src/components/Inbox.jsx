import React from 'react'
import styled from 'styled-components'
import sms from './assets/sms.png'

const CardContainer = styled.div`
 position:absolute;
box-sizing: border-box;
width: 520px;
height: 157px;
left: 637px;
top: 830px;

background: rgba(45, 0, 105, 0.3);
border-radius: 30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
&:hover{
background: rgba(64, 59, 84, 0.5);
transition: all 0.2s ease-in-out; 
cursor: pointer;
gap:0px;
}
`
const Header=styled.h3`

// // border:1px solid white;
// padding:1.5rem 9rem;
// width: 88px;
// height: px;
// left: 805px;
// top: 870px;
// margin:0px;
// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 32px;
// line-height: 48px;
// /* identical to box height */

// display: flex;
// align-items: center;
// text-transform: capitalize;

// color: #FFFFFF;

padding:0rem 9rem;
width: 88px;
height: 30px;
left: 805px;
top: 870px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 48px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`
const Value=styled.h1`

// border:1px solid white;
// padding:0rem 9rem;
// width: 207px;
// height: 0px;;
// left: 805px;
// top: 915px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 300;
// font-size: 20px;
// line-height: 30px;
// /* identical to box height */

// display: flex;
// align-items: center;
// text-transform: capitalize;

// color: #C4B6FF;


padding:0rem 9rem;
width: 207px;
height: 0px;
left: 805px;
top: 915px;

font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;
`

const Images = styled.div`
// border:1px solid white;
// padding: 0rem 1rem;
// width: 44px;
// height: 44px;
// left: 702px;
// top: 860px;

border:1px solid white;
width: 44px;
height:44px;
left: 702px;
top: 887px;
`
const Inbox = () => {
    return (
        <CardContainer>
            <Header>Inbox</Header>
            <Value>25 unread messages</Value>
            <Images>
            <img src={sms} alt="" />
            </Images>

        </CardContainer>
    )
}

export default Inbox