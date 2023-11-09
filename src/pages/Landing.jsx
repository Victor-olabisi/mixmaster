import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../component/CocktailList";
import SearchForm from "../component/SearchForm";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async ({request}) => {
   const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    return {drinks:response.data.drinks, searchTerm}
}


const Landing = () => {
    const { drinks, searchTerm } = useLoaderData();

    return (
      <>
        <SearchForm/>
        <CocktailList drinks={drinks} />
        </>
  )
}
export default Landing