import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../component/CocktailList";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async () => {
    const searchTerm = 'vodka'
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    return {drinks:response.data.drinks, searchTerm}
}


const Landing = () => {
    const { drinks, searchTerm } = useLoaderData();
    console.log(drinks);
    return (
        <>
            <CocktailList drinks={drinks} />
            
        </>
  )
}
export default Landing