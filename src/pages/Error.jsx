import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from  '../assets/not-found.svg'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    if (error.status === 404) {
          return (
            <Wrapper>
              <div>
                <img src={img} alt="" className="img" />
                      <h3>ohhh</h3>
                      <p>we can't seem to find the page you ae looking for </p>
                      <Link to='/'>back home </Link>
              </div>
            </Wrapper>
        );
    }
    return <h3>there ws an error </h3>

}
export default Error