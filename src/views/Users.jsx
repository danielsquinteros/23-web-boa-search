import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../index.css"
import { getUsers } from "../api/User";
import Search from "../components/Search";

const Users = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState({ isError: false, message: ''})
    const [search, setSearch] = useState({input: '', number: 10})


    console.log(search)

    const getUsersFromApi = async () => {
        setLoading(true)
        try {
            const users = await getUsers();
            setLoading(false)
            setUsers(users)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError({isError: true, message: 'Ocurrio un error en la API'})
        }
    }
    
    
    useEffect(() => {
        console.log('el componente se monto')
        getUsersFromApi()
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
        if(users.length > 0){

            const searchUsers = users.filter( user => {
                // Retorno todos los usuarios si no hay una palabra en la estado  search
                if(search === ''){
                    return user
                }
                // Retorno los usuarios que hacen math
                if(user.first_name.toLowerCase().includes(search.input.toLowerCase())){
                    return user
                }
            })

            if(searchUsers.length > 0){
                const usersAll = searchUsers.map(user => (
                    // eslint-disable-next-line react/jsx-key
                    <Card 
                        avatar={user.avatar}
                        name={user.first_name}
                        email={user.email}
                        phone_number={user.phone_number}
                        gender={user.gender}
                        date_of_birth={user.date_of_birth}
                        id={user.id}
                    />
                ))
                return usersAll;
            } else {
                return <h1>No existe usuarios que hagan match con: {search.input}</h1>
            }

        }
    }


    return(
        <>
            <Navbar />
            <div className="container">
                <Search setSearch={setSearch} />
                <div className="card-wrap">
                    {render()}
                </div>
            </div>
        </>
    )
}

export default Users;