import './Header.css';
import Logo from '../../assets/image1.png';
const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt='Logo do Totem' className='Logo' />
        </header>
    );
}   

export default Header; 