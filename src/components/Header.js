import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
        <a href="/">
            <img src="/images/home-icon.svg" alt="homeicon" />
            <span>Home</span>
        </a>
        <a href="#search">
            <img src="/images/search-icon.svg" alt="searchicon" />
            <span>Search</span>
        </a>
        <a href="#watchlist">
            <img src="/images/watchlist-icon.svg" alt="watchlisticon" />
            <span>Watchlist</span>
        </a>
        <a href="#originals">
            <img src="/images/original-icon.svg" alt="originalsicon" />
            <span>Originals</span>
        </a>
        <a href="#movies">
            <img src="/images/movie-icon.svg" alt="moviesicon" />
            <span>movies</span>
        </a>
        <a href="#series">
            <img src="/images/series-icon.svg" alt="seriesicon" />
            <span>Series</span>
        </a>
      </NavMenu>
      <UserImage src="https://media.licdn.com/dms/image/C4D03AQHzn0uVYT6MjQ/profile-displayphoto-shrink_800_800/0/1604201699946?e=1678320000&v=beta&t=e0QpgVGOCKd8Vn8V5L5QjqBNMQ_vOmxU6kDKdxi4UR0" alt="image" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display:flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width:80px
`
const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    overflow-x:hidden;
    a {
        display:flex;
        color:white;
        text-decoration: none;
        align-items: center;
        padding: 0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing: 1.42px;
            position relative;
            &:after {
                content: " ";
                height:2px;
                background:white;
                position: absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`
const UserImage = styled.img`
    width:48px;
    height:48px;
    border-radius: 50%;
    cursor:pointer;
`

