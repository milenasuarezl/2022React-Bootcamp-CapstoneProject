import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(<>
        <header>
            <Logo />
            <div>
                <input type="text" placeholder="Search"/>
                <FontAwesomeIcon disabled icon={faCartShopping} size='2xl'/>
            </div>
        </header>
    </>)
}

export default Header;  