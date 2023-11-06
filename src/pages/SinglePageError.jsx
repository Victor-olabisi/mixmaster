import { useRouteError } from "react-router-dom"

const SinglePageError = () => {
    const error = useRouteError()
    // console.log(error);
    
  return (
      <div>
          <h4>{error.message}</h4>
    </div>
  )
}
export default SinglePageError