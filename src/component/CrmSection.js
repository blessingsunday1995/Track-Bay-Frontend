import React from 'react'
import styled from 'styled-components';


const SectionDiv = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
background: white;

justify-content:center;
text-align: center;
padding: 10px 24px;

div{
display: inline-block;
border-radius: 25px;
background: #316DDD;
margin: auto;
width: 70%;
margin-bottom:20px;
margin-top:20px;
}

p{
    color:white;
}

h2{
    width:25%;
    margin: auto;
    margin-top:20px;

}
`
export const CrmSection = () =>
{
    return (
        <SectionDiv >
            <h2>Here’s how our CRM can help you </h2>
            <div>
                <p>Increase your lead-to-deal</p>
            </div>

            <div>
                <p>Get a 360 degree view of your business</p>
            </div>

            <div>
                <p>Quickly get to see your next-best actions</p>
            </div>

            <div>
                <p>Track important sales and marketing opportunties</p>
            </div>

            <div>
                <p>Take your business with you everywhere you go</p>
            </div>
        </SectionDiv>

    )
}

export default CrmSection;