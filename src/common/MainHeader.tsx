import './MainHeader.css';
import logo from '../assets/images/ideas-digitales-color.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function MainHeader() {
    return (
        <header id="main-header">
            <div className="container">
                <div className="header-content">
                    <figure id="logo">
                        <img src={logo} alt="Ideas Digitales" className="img-fluid logo-image" />
                    </figure>
                    <div className="large-above-menu">
                        <div className="widget widget_anpstext">
                            <span className="icon">
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <div className="anpstext-desc">
                                <span className="important">112 Your Address 23</span>
                                <br />
                                Washington DC 1234
                            </div>
                        </div>
                        <div className="widget widget_anpstext">
                            <span className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <div className="anpstext-desc">
                                <span className="important">Send us a mail</span>
                                <br />
                                mail@domain.com
                            </div>
                        </div>
                        <div className="widget widget_anpssocial">
                            <ul className="socialize">
                                <li>
                                    <a href="#" target="_self" className="social-link" title="Twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self" className="social-link" title="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self" className="social-link" title="Facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;