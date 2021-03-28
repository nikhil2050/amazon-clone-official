import React from 'react'

import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {Link} from 'react-router-dom'

function Header() {
    return (
        <Container>
            <HeaderLogo >
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"} />
                </Link>
            </HeaderLogo >
            
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </ HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello Nyx,</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
            </HeaderNavItems>

            <HeaderOptionCart>
                <Link to="/cart">
                    <ShoppingCartIcon />
                    <CartCount>5</CartCount>
                    </Link>
            </HeaderOptionCart>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img { 
        width: 100px;
        margin-left: 20px;
    }
`

const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`
    padding-left: 5px;
`
const OptionLineTwo = styled.div`
    padding-left: 5px;
    font-weight: 700;
`

const HeaderSearch = styled.div`
    padding-left: 4px;
    display: flex;
    flex-grow: 1;
    height: 40px;
    overflow: hidden;   // *** to display the below "border-radius" 
    border-radius: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
//    border: 0;
    flex-grow: 1;
    :focus {
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div`
    display:flex;
`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px; // TRouBLe
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 1px;
    font-weight: 700;
    color: #f08804;
`
