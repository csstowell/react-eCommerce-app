import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

// styled-components
const Container = styled.div`
    height: 60px;
`
// wrapper
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// LEFT SIDE:
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;

// language
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

// search-container
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

// input
const Input = styled.input`
    border: none;
`

// CENTER SIDE:
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

// logo
const Logo = styled.h1`
    font-weight: bold;
`;

// RIGHT SIDE:
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// menu item
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                   <Input />
                   <Search style={{color: "gray", fontSize:16}}/>
               </SearchContainer>
            </Left>
            <Center><Logo>DEPOP.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>      
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
