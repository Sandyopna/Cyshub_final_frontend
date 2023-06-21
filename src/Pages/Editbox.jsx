import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 975px;
height: 797px;
left: 409px;
top: 198px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 40px;
`

const Fn = styled.h3`

position: absolute;
width: 108px;
height: 30px;
left: 46px;
top: 40px;


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;
`

const Ln = styled.h3`
position: absolute;
width: 107px;
height: 30px;
left: 488px;
top: 40px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`

const Input1 = styled.input`
position: absolute;
width: 392px;
height: 67px;
left: 45px;
top: 102px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
font-size: 30px;

`
const Input2 = styled.input`
position: absolute;
width: 392px;
height: 67px;
left: 488px;
top: 102px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
font-size: 30px;
`

const Er = styled.h3`
position: absolute;
width: 100px;
height: 30px;
left: 45px;
top: 180px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`

const Ey = styled.h3`
position: absolute;
width: 102px;
height: 30px;
left: 488px;
top: 180px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`
const Input3 = styled.input`
position: absolute;
width: 392px;
height: 67px;
left: 45px;
top: 243px;
color:white;
font-size: 30px;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
`
const Input4 = styled.input`
position: absolute;
width: 392px;
height: 67px;
left: 488px;
top: 243px;
font-size: 30px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
`


const Cm = styled.h3`
position: absolute;
width: 167px;
height: 30px;
left: 45px;
top: 320px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`
const Input5 = styled.input`
position: absolute;
width: 835px;
height: 67px;
font-size: 30px;
left: 45px;
top: 384px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
`
const Ccn = styled.h3`
position: absolute;
width: 205px;
height: 30px;
left: 45px;
top: 462px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`
const Input6 = styled.input`
position: absolute;
width: 835px;
height: 67px;
left: 45px;
top: 525px;
font-size: 30px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
`
const Cp = styled.h3`
position: absolute;
width: 184px;
height: 30px;
left: 46px;
top: 603px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

text-transform: capitalize;

color: #C4B6FF;

`
const Input7 = styled.input`
position: absolute;
width: 291px;
height: 46px;
left: 46px;
font-size: 30px;
top: 666px;
color:white;
padding:10px;
font-family: Poppins;
background: rgba(64, 59, 84, 0.5);
border-radius: 60px;
`
const Button = styled.button`
position: absolute;
width: 103px;
height: 50px;
left: 777px;
top: 712px;
color:white;
padding:30px;
font-size: 20px;
font-family: Poppins;
background: #2D0069;
border-radius: 60px;
cursor:pointer;
`
const Text = styled.h3`
position: absolute;
width: 434px;
height: 90px;
left: 409px;
top: 10px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 90px;
/* identical to box height */

text-transform: capitalize;

color: #FFFFFF;


`
const Div = styled.h3``

const Editbox = () => {
    return (
        <Div>
            <Text>Update Profile</Text>
            <CardContainer>

                <Fn>Fist Name</Fn>
                <Ln>Last Name</Ln>
                <Input1 type='text' placeholder='' />
                <Input2 type='text' placeholder='' />
                <Er>Enter Role</Er>
                <Ey>Enter Year</Ey>
                <Input3 type='text' placeholder='' />
                <Input4 type='text' placeholder='' />
                <Cm>Change Email ID</Cm>
                <Input5 type='text' placeholder='' />
                <Ccn>Change Contact No</Ccn>
                <Input6 type='text' placeholder='' />
                <Cp>Change Password</Cp>
                <Input7 type='text' placeholder='' />
                <Button>Save</Button>

            </CardContainer>
        </Div>
    )
}

export default Editbox
