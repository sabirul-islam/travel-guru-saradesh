import React from 'react';
import Header from '../Header/Header';
import background from '../Image/background.jpg';
import '../Home/Home.css'
// import { useContext } from 'react';
import { CategoryContext, information } from '../../App';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams();
    // const category = useContext(CategoryContext);
    // console.log(category);
    
    const data = information.find(data=> data.id === bookingId);
    
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`}} className="background">

            <Header></Header>
            <div className='d-md-inline-flex'>            
           <div style={{width: '50%', textAlign: 'justify'}} className='text-light m-5'>
            <h1>{data.name}</h1>
            <p>{data.detail}</p>
            </div>
            <div>

            <Form className='ml-5'>
                <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>Origin</Form.Label>
                <Form.Control type="text" placeholder="Enter your origin" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>Destination</Form.Label>
                <Form.Control type="text" placeholder="Enter your destination" />
                </Form.Group>
                
                <Form.Group>
                <Form.Label className='text-light'>From</Form.Label>
                <Form.Control type="date" />
                <Form.Label className='text-light'>To</Form.Label><br/>
                <Form.Control type="date" />
                </Form.Group>
                <Link to='/hotel'><Button variant="warning" type="submit">
                Start Booking
                </Button>
                </Link>
                </Form>
            </div>
            </div>

            
        </div>
    );
};

export default Booking;