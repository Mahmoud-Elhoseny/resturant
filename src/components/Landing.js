import React from 'react'
import '../css/landing.css'
import { Container } from 'react-bootstrap'
import foodImg1 from '../Imgs/foodimg1.png'
import foodImg2 from '../Imgs/foodimg2.png'
import foodImg3 from '../Imgs/foodimg3.png'
const Landing = () => {
    return (
        <Container>
            <div className='seller flex text-center pt-5' id='promo'>
                <h2>Best Seller</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            </div>
            <div className='foodComp'>
                <div>
                    <img src={foodImg1} alt='foodImg1' />
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div >
                    <img src={foodImg2} alt='foodImg2' />
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div >
                    <img src={foodImg3} alt='foodImg3' />
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </Container>
    )
}

export default Landing