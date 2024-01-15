import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
              <div className='info'>
                <h1>
                    job <span>tracking </span>app
                </h1>
                <p>I'm baby marfa umami fam taxidermy wayfarers. Mixtape YOLO kickstarter letterpress vape blackbird spyplane twee affogato polaroid small batch. Echo park portland sartorial, occupy la croix iPhone meh. Hammock umami farm-to-table, raclette master cleanse keffiyeh photo booth distillery skateboard +1 organic same stumptown typewriter chambray.</p>
                <Link to='/register' className='btn register-link'>
                    Register
                </Link>
                <Link to='/login' className='btn'>
                    Login / Demo User
                </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
          </div>
        </Wrapper>
    );
};


export default Landing;