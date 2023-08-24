import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButtom from './BurguerButtom'
import Logo from './img/Logo.png'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'
function NavBar() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        //Cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    const data = {
      nombre: "Henry Emil",
      apellidos: "Acevedo Jerez",
    }
  return (
    <>
      <NavContainer>
        <LogoImage src={Logo} alt="Logo" />
        <h2>Gojo Store</h2>
              <div className={`links ${clicked ? 'active' : ''}`}>
              <a onClick={handleClick} href="#h">Home</a>
              <a onClick={handleClick} href="#h">shop</a>
              <a onClick={handleClick} href="#h">About</a>
              <a onClick={handleClick} href="#h">Contact</a>
              </div> 
                <CartContainer>
                  <CartWidget />
                </CartContainer>
                <div className='burguer'>
                  <BurguerButtom clicked={clicked} handleClick={handleClick}/>
                </div> 
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv> 
      </ NavContainer>

      <ItemListContainer data={data}/>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav `
  h2{
    color: white;
    font-weight: 400;
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media (min-width: 768px){  
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;

        }   
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        color: #white;
        margin-top: 1rem;
        font-size: 2rem;
    }

  }
  
  .burguer {
    @media(min-width: 768px){
        display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222 ;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition : all .6s ease ;

  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100$;
  }
`

const LogoImage = styled.img`
max-height: 70px
`

const CartContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;