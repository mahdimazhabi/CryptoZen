import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./routers/routers";
const App = () => {
  const router = createBrowserRouter(Routers);
  return <>{<RouterProvider router={router} />}</>;
};

export default App;
