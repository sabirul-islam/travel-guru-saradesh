import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../Header/Header';

const hotelnformation = [
    {name: "Hotel Ocean Palace", detail:'Set in Coxs Bazar, Hotel Ocean Palace has a shared lounge and a garden. Among the facilities at this property are a 24-hour front desk and room service, along with free WiFi throughout the property.', img: 'https://i.ibb.co/XJgTR0D/room2.png', id: 'HGFAK'},
    {name: "Hotel Sea Crown ", detail:'Situated on the beachfront and offering a 24-hour front desk, Hotel Sea Crown is located just 1.5 km from the famous Sugandha Beach. Free WiFi access is available.', img: 'https://i.ibb.co/KXj2PMS/room1.png', id: 'SDFRG'},
    {name: "Long Beach Hotel", detail:'Offering an indoor pool, a fitness centre and a spa and wellness centre, Long Beach Hotel is located 3.3 km from the Coxs Bazar Airport and Local Bus Station.', img: 'https://i.ibb.co/4g9VhmG/room3.png', id: 'PRGAS'}
                        ]

const HotelDeatail = () => {

    return (
        <div className='d-inline-flex'>        
            <div style={{width: '50%'}}>
            {
                hotelnformation.map(item=><Card className="bg-dark text-white m-4">
                <Card.Img style={{height: '250px'}} src={item.img} alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.detail}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
                )
            }
            </div>

            <div>
                <img className='mt-4' src={'https://i.ibb.co/mqq6wfB/coxsbazar.jpg'} alt=""/>
            </div>

        </div>

    );
};

export default HotelDeatail;