import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const BasicPage = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={6}>{children}</Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default BasicPage
