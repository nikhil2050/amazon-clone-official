import React from 'react'
import styled from 'styled-components'
import Product from './Product'

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>

            <Content>
                <Product />
                <Product />
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div`
    background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/MegaFashionSale_FST/GW_PC_BUNK_1500x600._CB656993439_.jpg');
    min-height: 600px;
    background-position: center;
    backgound-size: cover;     // Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
//    z-index: 1;
`
const Content = styled.div`
    margin-top: -400px;
    background: white;
    padding: 0 10px 0 10px;
    display: flex;
//    z-index: 100;
`