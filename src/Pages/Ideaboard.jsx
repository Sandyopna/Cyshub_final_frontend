import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 332px;
height: 932px;
left: 1431px;
top: 63px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
&:hover{
    background: rgba(64, 59, 84, 0.5);
    transition: all 0.2s ease-in-out; 
    cursor: pointer;
`
const Header=styled.h3`
padding:1rem 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 20px;
/* or 117% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`
const Value=styled.h1`

position: absolute;
width: 213px;
height: 30px;
left: 50px;
top: 81px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;
`
const Projects = styled.div`
`

const Div1 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 197px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;
`
const Div2 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 322px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;
`
const Div3 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 447px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;
`
const Div4 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 572px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;`
const Div5 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 697px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;

`
const Div6 = styled.div`
position: absolute;
width: 270px;
height: 88px;
left: 28px;
top: 822px;

background: linear-gradient(0deg, #361E99, #361E99), linear-gradient(0deg, #361E99, #361E99), #361E99;
border-radius: 20px;
`

const Des1 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;

`
const Des2 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;`
const Des3 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;`
const Des4 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;`
const Des5 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;`
const Des6 = styled.h3`
position: absolute;
width: 225px;
height: 36px;
left: 22px;
top: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;`





const TotEvents = () => {
    return (
        <CardContainer>
            <Header>Idea Board</Header>
            <Value>Project Ideas</Value>
            <Projects>
                <Div1>
                    <Des1>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des1>
                </Div1>

                <Div2>
                    <Des2>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des2>
                </Div2>

                <Div3>
                    <Des3>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des3>
                </Div3>
                <Div4>
                    <Des4>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des4>
                </Div4>

                <Div5>
                    <Des5>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des5>
                </Div5>

                <Div6>
                    <Des6>CYSCOM Discord Server Bot To Monitor User Access And Activities</Des6>
                </Div6>
            </Projects>

        </CardContainer>
    )
}

export default TotEvents
