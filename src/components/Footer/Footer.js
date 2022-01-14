import './Footer.css'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className='mt-5 bg-footer d-flex align-items-center'>
                    <div className="container d-flex justify-content-around align-items-center">
                        <h3>Seguinos en nuestras redes sociales</h3>
                        <div>
                            <i className="bi bi-instagram mx-2 i-size"></i>
                            <i className="bi bi-facebook mx-2 i-size"></i>
                            <i className="bi bi-youtube mx-2 i-size"></i>
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className='row'>
                        <form className='col-6'>
                            <h3>Contacto</h3>
                            <div className="mb-3">
                                <label htmlFor="nameArea" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id='nameArea' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailArea" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailArea" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="msjArea" className="form-label">Mensaje</label>
                                <textarea type="" className="form-control" id="msjArea" ></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Enviar</button>
                        </form>
                        <div className='col-6 text-center'>
                            <h3>Donde estamos?</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.9802268843507!2d-58.439696215729974!3d-34.6051614965088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbb65ba9748d%3A0x55e354492c34dd7a!2sGreelow%20Mobile%20App%20Development!5e0!3m2!1ses-419!2sar!4v1642118238887!5m2!1ses-419!2sar" className='style-Map'></iframe>
                        </div>
                    </div>
                </div>
                <div className='mt-5 bg-footer d-flex align-items-center'>
                    <div className='container d-flex justify-content-between'>
                        <span>@2022</span>
                        <span>Programa desde Greelow</span>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;