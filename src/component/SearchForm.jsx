import Wrapper from "../assets/wrappers/SearchForm"
import { Form,Link, useNavigation } from "react-router-dom"

const SearchForm = ({searchTerm}) => {
    const navigation = useNavigation()
    const isSearching = navigation.state === 'submitting' 
  return (
      <Wrapper>
          <Form className='form'>
              <input type="search" name="search" className="form-input" defaultValue={searchTerm} placeholder="search for any cocktail drink"/>
              <button className="btn" type="submit">{isSearching ? 'searching' : 'search'}</button>
          </Form>
    </Wrapper>
  )
}
export default SearchForm