import React from 'react'
import { Button, Card, Row, Col } from 'reactstrap';


function ProjectCard(props) {
    return (
        <Row className=" d-flex justify-content-center px-3 mt-3">
            <Col className="d-flex justify-content-center">
                <Card className="mb-3 bg-secondary border-0" style="width: 18rem;">
                    <Card header className="bg-secondary border-0">
                        <a href="https://dreesehudson.github.io/classic-calculator/" target="_blank">
                        <img
                            src="/img/calculator.png" className="rounded-circle border border-success card-img-top"
                            alt="calculator" />
                        </a> 
                        <Card body>
                            <Card title className="text-center">Classy Calculator</Card>
                            <Card text className="text-center">Basic Calculator made using JS Classes</Card>
                        </Card>
                        <Card footer className="d-flex justify-content-center bg-secondary border-0 ">
                            <Button href="https://dreesehudson.github.io/classic-calculator/" target="_blank"
                                className="btn-primary mx-1">Go</Button>
                            <Button href="https://github.com/dreesehudson/classic-calculator" target="_blank"
                                className="btn-primary mx-1"><i class="fab fa-github"/></Button>
                        </Card>
                    </Card>
                </Card>
            </Col>
        </Row>
        
    );
}

export default ProjectCard