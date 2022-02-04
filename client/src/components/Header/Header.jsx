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
        <header>
            <Row className="header">
                <Col>
                    <h1>Alpha</h1>
                </Col>
                <Col>
                    <Navbar>
                        <Nav>
                            <Nav.Link href="/Fantasy">Home</Nav.Link>
                            <Nav.Link href="/News">News</Nav.Link>
                            <Nav.Link href="/Fixtures">Fixtures</Nav.Link>
                            <Nav.Link href="/Results">Results</Nav.Link>
                            <Nav.Link href="/Rankings">Rankings</Nav.Link>
                            <Nav.Link href="/Forum">Forum</Nav.Link>
                            <Nav.Link href="/Quizz">Quizz</Nav.Link>
                            <Nav.Link href="/Fantasy">Fantasy</Nav.Link>
                            <Nav.Link href="/Stat">Stat</Nav.Link>
                            <Nav.Link href="/History">History</Nav.Link>
                            <Nav.Link href="/Shop">Shop</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </header>
    )
}