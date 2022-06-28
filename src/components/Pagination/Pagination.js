import { Button, Container } from './Pagination.styled';

const Pagination = ({totalPages}) => {
    return <Container>
                <Button>Prev</Button>
                <p>{totalPages}</p>
                <Button>Next</Button>
            </Container>
}

export default Pagination;