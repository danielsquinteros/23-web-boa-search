import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../index.css"
import { getUsers } from "../api/User";


const Users = () => {
    useEffect(() => {
        console.log('el componente se monto')
        getUsers()
    }, [])


    return(
        <>
            <Navbar />
            <div className="container">
                <div className="card-wrap">
                    <Card 
                        avatar="https://robohash.org/voluptateminventorequae.png?size=300x300&set=set1"
                        name="Theodore"
                        email="theodore.tromp@email.com"
                        phone_number="+809 1-725-991-4297 x115"
                        gender="Genderfluid"
                        date_of_birth="1984-08-22"
                        id={1212}
                    />
                </div>
            </div>
        </>
    )
}

export default Users;