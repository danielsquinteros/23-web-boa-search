import PropTypes from 'prop-types';

const Search = ({setSearch}) => {
  return (
    <>
        <div className="form-floating mb-3">
            <input
                onChange={(event) => {
                    setSearch({input: event.target.value})
                }}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Buscador de usuarios" 
            />
            <label htmlFor="floatingInput">Buscador</label>
        </div>
    </>
  )
}

Search.propTypes = {
    search: PropTypes.object,
    setSearch: PropTypes.func,
}

export default Search