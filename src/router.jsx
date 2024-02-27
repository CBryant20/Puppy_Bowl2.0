import { createBrowserRouter } from "react-router-dom";
import Puppy from "./Puppy";
import PuppyList from "./PuppyList";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/puppylist",
        element: <PuppyList />,
      },
      {
        path: "/puppies/:id",
        element: <Puppy />,
      },
    ],
  },
]);

export default router;
