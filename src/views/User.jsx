import { useEffect, useState } from "react";
import { getNationalizeByWord } from "../api/User";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const User = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState({ isError: false, message: ''})
    const { name } = useParams()

    const getNationalizeFromApi = async () => {
        setLoading(true)
        try {
            const user = await getNationalizeByWord(name);
            console.log(user)
            setLoading(false)
            setUser(user)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError({isError: true, message: 'Ocurrio un error en la API'})
        }
    }


    useEffect(() => {
        getNationalizeFromApi(user)
    }, [])

    const render = () => {
        if(loading === true){
            return(<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>)
        }
        if(error.isError === true){
            return <h1>{error.message}</h1>
        }
        if(user){
            return(
                <>
                    <h6 className="display-6">{user.name}</h6>
                    <p>nombre</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">country_id</th>
                                <th scope="col">probability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.country.length > 0 && 
                                user.country.map(c => (
                                    <tr key={c.country_id}>
                                        <td>{c.country_id}</td>
                                        <td>{c.probability}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                
                </>
            )
        }
    }


    return(
        <>
            <Navbar />
            <div className="container">
                {render()}
            </div>
        </>
    )
}

export default User;