import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
      <Container>
        <Background>
            <img src="https://static.bunnycdn.ru/i/cache/images/2020/07/a75f3868f94966946d2945da88baf412.jpg" alt="" />
        </Background>
        <ImageTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F931D5919035A79382C15084626798511C65FA6C5195966B6461C8923834E6/scale?width=1920&aspectRatio=1.78&format=png" alt="" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="play-icon" />
            <span>Play</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="play-icon" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" alt="group" />
          </GroupWatchButton>
        </Controls>
        <Subtitle>
          2018 - 7m - Family, Fantasy, Kids, Animation
        </Subtitle>
        <Description>
        Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It is the first Pixar short film to be directed by a female director. It was screened at the Tribeca Film Festival before being released with Incredibles 2 on June 15, 2018.
        </Description>
      </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
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
 const ImageTitle = styled.div`
    height: 30vh;
    width:35vw;
    min-width:200px;
    min-height: 170px;
    padding-top:2rem;
    img{
      width:100%;
      height:100%;
      object-fit:contain;
    }
 `
 const Controls = styled.div`
  display:flex;
  align-items:center;
 `
 const PlayButton = styled.button`
    border-radius: 4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height: 56px;
    background:(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor:pointer;
    &:hover{
      background: rgb(198,198,198);
    }
 `
 const TrailerButton = styled(PlayButton)`
 background: rgba(0,0,0,0.3);

 border:1px solid rgb(249,249,249);
 color: rgb(249,249,249);
 text-transform: upercase;
 `
 const AddButton = styled.button`
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border: 2px solid white;
  background: rgba(0,0,0,0.6);
  cursor:pointer;
  span{
    font-size:1.8rem;
    color:white;
  }
  margin-right: 16px;

 `
 const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0)
 `

 const Subtitle = styled.div`
  color: rgb(249,249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top:26px;
  `
  const Description = styled.div`
  color: rgb(249,249,249);
  line-height: 1.4;
  font-size:20px;
  margin-top:16px;
  max-width:700px;
 `
