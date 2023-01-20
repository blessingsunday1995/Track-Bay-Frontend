import React from 'react'
import styled from 'styled-components';

const Product = styled.div`
padding: 2em;
background: #316DDD;


`
const FirstDiv = styled.div`
div{
display: flex;
flex-direction: column;
display: inline-block;
background: white;
border-radius: 3%;
width: 150px;
padding: 50px 30px;
padding-top:200px;
margin:10px 24px;
margin-top:5rem;

}
`
const SecondDiv = styled.div`
div{
display: flex;
flex-direction: column;
display: inline-block;
background: #F1AE2B;
width: 150px;
padding: 50px 30px;
padding-top:200px;
margin:10px 24px;
margin-top:-100rem;
height:-200px;
border-radius: 5px;

}
`
export const OurProduct = () =>
{
    return (
        <Product>
            <FirstDiv>
            <h2>OurProduct</h2>
            <div>
                <p>Increase your lead-to-deal</p>
            </div>

            <div>
                <p>Get a 360 degree view of your business</p>
            </div>

            <div>
                <p>Quickly get to see your next-best actions</p>
            </div>
            </FirstDiv>

            <SecondDiv className='product'>
                <div>
                    <p>Increase your lead-to-deal</p>
                </div>

                <div>
                    <p>Get a 360 degree view of your business</p>
                </div>

                <div>
                    <p>Quickly get to see your next-best actions</p>
                </div>
            </SecondDiv>
        </Product>
    )
}

export default OurProduct;