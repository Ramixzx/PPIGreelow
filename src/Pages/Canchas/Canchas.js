import './Canchas.css'
import { useContext, useEffect } from 'react';
import { Context } from '../../Store/appContext';
import { useParams } from 'react-router-dom';

const Canchas = () => {

    const {deporte, obtenerInfoDeporte} = useContext(Context)
    const {cancha} = useParams();

    useEffect(() => {
        obtenerInfoDeporte(cancha)
    },[cancha])

    return ( 
        <>
            <h2 className='mx-3'>Canchas de {cancha}</h2>
            {deporte.length > 0 ? 
                deporte.map(depo => (
                    <div className='m-3' key={depo.id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={depo.url_imagen} className="img-fluid rounded-start" alt='imagen' />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{depo.nombre}</h5>
                                        <p className="card-text">Cantidad de jugadores: <b>{depo.jugadores}</b></p>
                                        <p className="card-text">Cancha techada: {depo.techo == true ? <b>Si</b> : <b>No</b>}</p>
                                        <p className="card-text">Horarios: {depo.horarios.map(horario => (
                                            <button type="button" className="btn btn-light mx-2 my-1" key={horario.id}>{horario.hora}</button>
                                        ))}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))
            :
                <div className='text-center'>
                    <div className="spinner-border " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
     );
}
 
export default Canchas;