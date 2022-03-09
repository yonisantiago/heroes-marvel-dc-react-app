import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const {searchText} = formValues;

  const heroesFiltered = useMemo(()=> getHeroesByName(q), [q]);// getHeroesByName(q);


  const handleSearch = (e) =>{
   e.preventDefault();
    //console.log(location)
    navigate(`?q=${searchText}`)
  }
  
  return (
      <div >
        
          <div className="mt-2 bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-2">
              <h1 className="display-5 fw-bold text-white animate__animated animated__pulse">Search Heroes</h1>
              <div className="col-lg-6 mx-auto">
                  <p className="fs-5 mb-4">  Use this function to search for a hero! </p>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row ">
            <div className="col-5">
              <h4>Search Heroes</h4>
              <hr/>

              <form onSubmit={handleSearch}>
                <input type="text" className="form-control" placeholder="Search a hero" name="searchText"  value={searchText} onChange={handleInputChange}/>
              
              <button type="submit" className="btn btn-outline-primary mt-1 ">
                Search
              </button>
              </form>
            </div>

            <div className="col-7 mb-2 pb-4">

            <h4>Results:</h4>
            <hr/>

            {
              (q=== '') 
              ? <div className="alert alert-info">Search a hero!</div> 
              : (heroesFiltered.length === 0 ) 
              && <div className="alert alert-danger">No heroes found</div>


            }


            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.name} {...hero} />
              ))
            }  
            
            </div>
            <hr/>
            
          </div>
         
      </div>
    )
  }
  