import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, SearchInput } from './Header.styled';

const Header = (props) => {
    return(<>
        <Wrapper>
            <Logo onClick={props.onClick} />
            <div>
                <SearchInput type="text" placeholder="Search" disabled/>
                <FontAwesomeIcon disabled icon={faCartShopping} size='xl'/>
            </div>
        </Wrapper>
    </>)
}

export default Header;  