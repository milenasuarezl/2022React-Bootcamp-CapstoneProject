import { Button, Span, Wrapper, WrapperButtons} from './Tags.styled';

const Tags = (props) => {
    const { filters, onClick} = props;

    if (filters.length > 0) {
        return<Wrapper>
            <label>Filtros aplicados</label>
            <WrapperButtons>
                {
                    filters.map(({id, name}) => {
                        return(        
                            <Button 
                                key={id} 
                                onClick={onClick}
                                id={id}
                            >  
                                <Span>{name}</Span> X
                            </Button>
                        )
                    })
                }
             </WrapperButtons>
        </Wrapper>
    }

    return <></>
}

export default Tags;