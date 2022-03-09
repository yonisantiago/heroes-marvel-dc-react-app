import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

    
  

  const {heroeId} = useParams();
  
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId] );
  
 
  // regresando a la ruta anterior usando -1 
  const handleReturn = () => {
      return navigate(-1);
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

  if (!hero) {
    return <Navigate to='/'/>  
  }

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
      
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img src={imagePath} alt={superhero} className="img-thumbnail "/>
      </div>

      <div className='col-8 animate__animated animate__fadeInRight'>
        <h3>{superhero}</h3>
        <hr/>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'> <b>Alter ego:</b> {alter_ego}</li>
            <li className='list-group-item'> <b>Publisher:</b> {publisher}</li>
            <li className='list-group-item'> <b>First Appearance:</b> {first_appearance}</li>
        </ul>

        <h4 className="mt-3">Characters:</h4>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}> Return</button>

      </div>

    </div>
  )
}
