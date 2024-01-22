import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5 mb-5'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>
            <div className='d-flex mb-5'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100}>
                        The quick brown fox jumps over the lazy  dog The quick brown fox jumps over the lazy  dog The quick brown fox jumps over the lazy  dog
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;