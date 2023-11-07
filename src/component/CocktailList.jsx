import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
 
  if (drinks === null) {
    return <Wrapper>
      <h2>no drink found </h2>
    </Wrapper>
  }
   const formattedDrinks = drinks.map((drink) => {
     const {
       idDrink,
       strDrink,
       strAlcoholic,
       strDrinkThumb,
       strInstruction,
       strGlass,
     } = drink;
     return {
       id: idDrink,
       name: strDrink,
       info: strAlcoholic,
       image: strDrinkThumb,
       instruction: strInstruction,
       glass: strGlass,
     };
   });
  return <Wrapper>
    {formattedDrinks.map((drink) => {
      return <CocktailCard key={drink.id} {...drink} />
    })}
  </Wrapper>;
};
export default CocktailList;
