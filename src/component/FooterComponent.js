import React from 'react'
import styled from 'styled-components';

const FooterStyle = styled.div`
padding: 2em;
background: #316DDD;
margin-top:-5rem;

div{
display: flex;
flex-direction: column;
display: inline-block;
background: white;
border-radius: 5px;
width: 15%;
padding: 70px 50px;
padding-bottom:70px;
padding-top:20px;
height:70%;
margin:10px 24px;

}
p{
    color:black;
}

h2{
    width:25%;
    margin: auto;
    margin-top:20px;
`

export const FooterComponent = () =>
{
    return (
        <FooterStyle>
                <div>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>

                <div>
                    <h3>Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>

                <div>
                    <h3>Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
           
        </FooterStyle>
    )
}

export default FooterComponent;
