import React from 'react'
import { Navbar, Nav, Container, Row, Col, Card, Button, Image ,CardDeck ,CardColumns ,CardImg } from 'react-bootstrap'
import Foot from "./Footer";
import Collaboration from "./Images/collaboration.svg";
import Thank from "./Images/thank_you.svg";
import Navibar from "./Navbar";
import "../Pages/HomeScreen.css";
export default function Thanks() {
    return (
        <Container className="fluid">
            <Navibar/>
            <Card className = "Background">
                <CardImg src ={Thank} width="150px" height="150px"/>
                <div className="Thank-content">
                    <h1>Thank You</h1>
                    <p>
                        Helping Jet Community thanks you for Donating for our common Cause, Society needs people like you to come forward and march with us for the welfare of society. We Will always remember your valuable contribution for the cause of needy Elder People.
                        Spread the word to people so that you and us could make a better environment for everyone.
                    </p>
                </div>
                <div className="foot">
                    <h1>Join our Community</h1>
                    <Foot />
                </div>
            </Card>
        </Container>
    )
}
