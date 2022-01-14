import './Cards.css'
import { useContext } from 'react';
import { Context } from '../../Store/appContext';
import { Link, useParams } from 'react-router-dom';

const Cards = () => {

    const {api} = useContext(Context);
    const {cancha} = useParams();

    return ( 
        <>
            {api.map(api => (
                <div className="card text-center" key={api.id} style={{width: '18rem'}}>
                    <img src={api.url_imagen} className="card-img-top height-img" alt='imagen' />
                    <div className="card-body">
                        <h5 className="card-title">{api.deporte}</h5>
                        <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={`/${api.deporte}`} className="btn btn-success">Ver canchas</Link>
                    </div>
                </div>
            ))
            }
        </>
     );
}
 
export default Cards;