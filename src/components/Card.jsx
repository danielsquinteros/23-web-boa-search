import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <div className="card" style={{width: "250px"}}>
        <img src={props.avatar} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.email}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.phone_number}</li>
            <li className="list-group-item">{props.gender}</li>
            <li className="list-group-item">{props.date_of_birth}</li>
        </ul>
        <div className="card-body">
            <NavLink className="card-link" to={`user/${props.id}`}>Ver más</NavLink>
    </div>
    </div>
  )
}

Card.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    date_of_birth: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Card;