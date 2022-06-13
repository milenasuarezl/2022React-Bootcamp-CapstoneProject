import { Wrapper, Div, CheckBox } from "./Slidebar.styled";

const Sidebar = (props) => {
    const { data, onClick } = props;
    return<Wrapper>
            {
                data.map(({id, name}) => {
                    return (
                        <Div key={id}>
                            <CheckBox type="checkbox" onClick={onClick}/>
                            <label>{name}</label>
                        </Div>
                    )
                })
            }
        </Wrapper>
}

export default Sidebar;