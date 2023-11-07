
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/CocktailCard"
const CocktailCard = ({id, image, info,glass,name}) => {
  return (
    <Wrapper>
      <img src={image} alt="" className="img" />
      <footer className="footer">
        <h4>{name}</h4>
        <p>{glass}</p>
        <h5>{info}</h5>
        <Link to={`/cocktail/${id}`} className='btn'>details</Link>
      </footer>
    </Wrapper>
  )
}
export default CocktailCard