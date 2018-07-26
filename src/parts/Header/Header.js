import { Navigation } from '../Navigation';
import layers from '../../images/layers.svg';
import clock from '../../images/clock.svg';
import star from '../../images/star.svg';
import music from '../../images/music-player.svg';
import house from '../../images/house.svg';
import './header.scss';


export const Header = () => (
  <React.Fragment>
    <header>
      <div className="header-wrap">
        <div className="nav_wrap">
          <a href="/" className="header_logo">
            <img
              className=""
              src={layers}
              alt="logo"
            />
          </a>
          <Navigation
            list={['About us', 'Company', 'Careers', 'Contacts' ]}
          />
        </div>
        <div className="user">
          <button className="button button-user">login in</button>
          <button className="button button-user button-secondary">sing up</button>
        </div>
      </div>
    </header>

    <div className="banner">
      <div className="banner-inner">
        <h1 className="banner-title">Stu Unger Rise And Fall Of A Poker Genius</h1>
        <p className="banner-desc">V7 Digital Photo Printing</p>
        <div className="banner-items">
          <div className="banner-item">
            <img
              className="icon"
              src={clock}
              alt="clock"
            />
            <p>The Skinny On Lcd Monitors</p>
          </div>
          <div className="banner-item">
            <img
              className="icon"
              src={star}
              alt="star"
            />
            <p>Guidelines For Inkjet Cartridge Refill</p>
          </div>
          <div className="banner-item">
            <img
              className="icon"
              src={music}
              alt="music"
            />
            <p>Do A Sporting Stag Do In Birmingham</p>
          </div>
          <div className="banner-item">
            <img
              className="icon"
              src={house}
              alt="house"
            />
            <p>Your Computer Usage </p>
          </div>
        </div>
      </div>
      <div className="banner-image"></div>
    </div>
  </React.Fragment>
);
