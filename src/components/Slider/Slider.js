import './Slider.css';
import { useContext } from 'react';
import { Context } from '../../Store/appContext';


const Slider = () => {
    const {api} = useContext(Context)

    return ( 
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={api[0].url_imagen} className="d-block w-100 height-slider" alt="Imagen de futbol" />
                    </div>
                    <div className="carousel-item">
                        <img src={api[1].url_imagen} className="d-block w-100 height-slider" alt="Imagen de Tenis" />
                    </div>
                    <div className="carousel-item">
                        <img src={api[2].url_imagen} className="d-block w-100 height-slider" alt="Imagen de Voley" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
     );
}
 
export default Slider;