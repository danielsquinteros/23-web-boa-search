import Navbar from "../components/Navbar";

const Home = () => {
    return(
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-6">Proyecto usuarios</h1>
                        <p className="lead">
                            Proyecto realizado el 19 de Junio, a las 20:33 con 10 alumnos conectados. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                            <img src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8" className="img-fluid rounded" alt="Teclado" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;