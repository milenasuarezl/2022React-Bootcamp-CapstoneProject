import { Wrapper, Div, CheckBox } from "./Slidebar.styled";

const Sidebar = (props) => {
    const { data, onChange } = props;
    return<Wrapper>
            {
                data.map(({id, data, checked}) => {
                    return (
                        <Div key={id}>
                            <CheckBox 
                                type="checkbox"
                                id={id}
                                name={data.name}
                                onChange={onChange} 
                                checked={checked}
                            />
                            <label>{data.name}</label>
                        </Div>
                    )
                })
            }
        </Wrapper>
}

export default Sidebar;