import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
} from "./pages";
import {loader as LandingLoader} from './pages/Landing'
import SinglePageError from "./pages/SinglePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement:<SinglePageError/>,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
