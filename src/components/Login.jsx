import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
      <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>Get All There</SignUp>
            <Description>
                Get premier Access to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, nobis accusamus dolore et quos quas error nisi quod temporibus voluptate eum consequatur pariatur animi accusantium in reiciendis deserunt perspiciatis rerum!
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Container>
  )
}

export default Login
 const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    height: calc(100vh - 70px);
    &:before{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        content:"";
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        z-index:-1;
    }
 `
 const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
 `
 const CTALogoOne = styled.img``

 const SignUp = styled.a`
    width: 100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius: 4px;
    text-align:center;
    text-transform:uppercase;
    cursor:pointer;
    font-size:18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top:8px;
    margin-bottom:12px;
    opacity:0.8;
    &:hover{
        background-color:#0483ee;
    }
 `
 const Description = styled.p`
    font-size:11px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    text-align:center;
 `

 const CTALogoTwo = styled(CTALogoOne)`
    margin-top: 1rem;
    width:90%;
 `
