import './Header.css'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'

export function Header(){
    console.log(Col);
    return(
        <Container>
            <Row>
                <Col lg={4} md={4} sm={8}>
                    <h1>Alpha</h1>
                </Col>
                <Col>
                    <Navbar>
                        <Nav>
                            <Nav.Link href="/Fantasy">Fantasy</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}