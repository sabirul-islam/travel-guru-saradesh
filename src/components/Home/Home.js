import React from 'react';
import { useContext } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../App';
import Header from '../Header/Header';
import background from '../Image/background.jpg';
import './Home.css'

const Home = () => {
  const category = useContext(CategoryContext);
  console.log(category);
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`}} className="background">
    
<Header></Header>

<Carousel className='carouselImage'>
{
  category[2].map(item=>
    <Carousel.Item>
    <Carousel.Caption style={{height: '300px', width: '300px', marginLeft: '450px'}}>
      <h3>{item.name}</h3>
      <p>{item.detail}</p>
    <Link to={'/booking/'+ item.id}> <Button variant="warning">Booking →</Button></Link>
    </Carousel.Caption>
      <img style={{marginLeft: '200px', borderRadius: '20px'}}
      className="d-block w-5"
      src={item.img}
      alt="Third slide"
      />
    </Carousel.Item>
  )
}
</Carousel>        
</div>
    );
};

export default Home;