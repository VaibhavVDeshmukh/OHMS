import { Component } from 'react';
import banner1 from './../Images/Hospital-img1.jpg';
import banner2 from './../Images/Hospital-img2.jpg';
import banner3 from './../Images/Hospital-img3.jpg';

class Carousel1 extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <><div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='cardiv'>
      <img className="d-block w-100; img1" src={banner1} alt="First slide"/>
      </div>
    </div>
    <div className="carousel-item">
    <div className='cardiv'>
      <img className="d-block w-100; img1 " src={banner2} alt="Second slide"/>
      </div>
    </div>
    <div className="carousel-item">
    <div className='cardiv'>
      <img className="d-block w-100; img1 " src={banner3} alt="Third slide"/>
         </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span className="sr-only">Next</span>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    
  </a>
</div>

        </div>
        
        </>
        )}
}
export default Carousel1;
