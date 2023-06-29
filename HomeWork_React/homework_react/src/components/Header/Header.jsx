import './header.scss';
import Container from '../Container/Container';
import logoCoffee from '../../image/logo.png';


const Header = () => (
  
  <header className='header'>
    <Container>
      <div className="container__content">

        <div className='header__logo'>
          <img className='img__logo' src={logoCoffee} alt="Logo"/>
        </div>
        <h2 className='heading--h2'>Aroma Avenue</h2>

        <div className="header__social--box">
          <ul>
            <li><a href="https://">Home</a></li>
            <li><a href="https://">News</a></li>
            <li><a href="https://">Contacts</a></li>
            <li><a href="https://">Details</a></li>
            <li><a href="https://">Delivery</a></li>
          </ul>
        </div>

      </div>
    </Container>
  </header>
  )


export default Header;