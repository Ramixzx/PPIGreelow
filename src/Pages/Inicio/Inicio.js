import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import './Inicio.css'

const Inicio = () => {
    return ( 
        <>
            <div className="container mt-3">
                <Slider /> 
                <section className="text-center mt-4">
                    <h2>Nuestras canchas</h2>
                    <div className='mt-3 d-flex justify-content-evenly'>
                        <Cards />
                    </div>
                </section>
            </div>
            <Footer />
        </>
     );
}
 
export default Inicio;