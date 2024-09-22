import './Header.css';
import { GiSpoon } from 'react-icons/gi';
import { BiSolidUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <Link to={'/'}>
                <h1>
                    Recipe sharing platform
                    <GiSpoon />
                </h1>
            </Link>
            <BiSolidUserCircle className='user-img' />
        </div>
    )
}

export default Header;