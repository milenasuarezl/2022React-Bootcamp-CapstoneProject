import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, SearchInput } from './Header.styled';

const Header = () => {
    return(<>
        <Wrapper>
            <Logo />
            <div>
                <SearchInput type="text" placeholder="Search" disabled/>
                <FontAwesomeIcon disabled icon={faCartShopping} size='xl'/>
            </div>
        </Wrapper>
    </>)
}

export default Header;  