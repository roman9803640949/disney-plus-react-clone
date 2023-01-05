import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <div>
      <Container>
        <Background>
            <img src="https://static.bunnycdn.ru/i/cache/images/2020/07/a75f3868f94966946d2945da88baf412.jpg" alt="" />
        </Background>
        <ImageTitle></ImageTitle>
      </Container>
    </div>
  )
}

export default Detail

const Container = styled.div`
    minHeight: calc(100vh - 70px);
    padding: 0 calc(3.5vw +5px);
    position:relative;
`
 const Background = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover
    }
 `
