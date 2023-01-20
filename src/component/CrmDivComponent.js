import React from 'react';
import styled from 'styled-components';

const CrmStyled = styled.div`
padding: 2em;
background: #316DDD;

`
const GetStartedBtn = styled.div`

background-color: #4CAF50; /* Green */
background: #F1AE2B;
border: none;
color: white;
padding: 10px 24px;
padding-top:0px;
padding-bottom:0px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 10px;
border-radius: 5px;
`
const CRMStyledDiv = styled.div`
display: flex;
flex-direction: row;
text-decoration: none;
justify-content:center;
padding: 10px 24px;



div{
display: flex;
flex-direction: column;
display: inline-block;
background: white;
border-radius: 50%;
width: 150px;
padding: 10px 24px;
margin:10px 24px;
}
`
export const CrmDivComponent = () =>
{
    return (
        <CrmStyled>

            <h1 className='wwwu'>Why Work With Us?</h1>
            <CRMStyledDiv>
            <div>
                <h3>CRM</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div>
                <h3>CRM</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div>
                <h3>CRM</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div>
                <h3>CRM</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            </CRMStyledDiv>
            <GetStartedBtn>
                <h3>Get Started</h3>
            </GetStartedBtn>
        </CrmStyled>
    )
}

export default CrmDivComponent;
