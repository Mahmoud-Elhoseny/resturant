import React from 'react'
import '../css/Footer.css'
import { Container } from 'react-bootstrap'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='big d-flex justify-content-between'>
                    <div>
                        <h2>Title Here</h2>
                        <p className='badp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.</p>
                        <div className='icons'>
                            <a href='https://www.instagram.com/mahmoudalhosenyy1/?igshid=OGQ5ZDc2ODk2ZA%3D%3D' target='_blank'><AiOutlineInstagram /></a>
                            <a href='https://www.facebook.com/profile.php?id=100001692443381' target='_blank'><BiLogoFacebook /></a>
                            <a href='' target='_blank'><BiLogoTwitter /></a>
                            <a href='' target='_blank'><BsWhatsapp /></a>
                        </div>
                    </div>
                    <div className='about'>
                        <h2>ABOUT</h2>
                        <p>HISTORY</p>
                        <p>Our Team</p>
                        <p>Brand Guidelines</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='services'>
                        <h2>Services</h2>
                        <p>How to Order</p>
                        <p>Our Product</p>
                        <p>Order Status</p>
                        <p>Promo</p>
                        <p>Payment Method</p>
                    </div>
                    <div>
                        <h2>Other</h2>
                        <p>Contact us</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer