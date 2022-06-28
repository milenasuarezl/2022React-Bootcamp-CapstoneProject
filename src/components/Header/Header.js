import Logo from "../Logo/Logo";
import shoppingCart from '../../assets/icons/shopping-cart.png';
import { Img, Wrapper, SearchInput, WrapperActions } from './Header.styled';

const Header = (props) => {
    return(<>
        <Wrapper>
            <Logo onClick={props.onClick} />
            <WrapperActions>
                <SearchInput type="text" placeholder="Search" disabled/>
                <Img src={ shoppingCart } alt="shopping cart"/>
            </WrapperActions>
        </Wrapper>
    </>)
}

export default Header;  