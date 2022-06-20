const Tags = (props) => {
    const { filters, onClick} = props;

    if (filters.length > 0) {
        return<>
            <label>Filtros aplicados</label>
            {
                filters.map(({id, name}) => {
                    return(
                        <button 
                            key={id} 
                            onClick={onClick}
                            id={id}>
                            {name} X
                        </button>
                    )
                })
            }
        </>
    }

    return <></>
}

export default Tags;