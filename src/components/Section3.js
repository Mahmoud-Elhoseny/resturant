import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/section3.css'
import oriental from '../Imgs/oriental.png'
import foodImg2 from '../Imgs/foodimg2.png'

const Section3 = () => {
    return (

        <div className='secti'>
            <div className=' section3'>
                <Container>
                    <div className='d-flex justify-content-between'>
                        <img src={oriental} className='rounded-circle' alt='oriental' />
                        <div className='contain'>
                            <h2>Oriental Taste</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                            <button>ORDER NOW</button>
                        </div>
                    </div>
                </Container>
                <div className='statistics '>
                    <h2>Statistics</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                    <Container>
                        <div className='circles'>
                            <div>
                                <p>123</p>
                                <span>outlet</span>
                            </div>
                            <div>
                                <p>100</p>
                                <span>CHEF</span>
                            </div>
                            <div>
                                <p>300</p>
                                <span>MENU</span>
                            </div>
                            <div>
                                <p>30</p>
                                <span>COUNTRY</span>
                            </div>
                        </div>
                    </Container>
                    <div className='grill d-flex justify-content-between'>
                    <div>
                        <h2>Chicken Grill</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                        <button>ORDER NOW</button>
                        </div>
                    <div>
                        <img src={foodImg2} alt='foodImg2' />
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}

export default Section3