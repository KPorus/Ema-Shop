import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './component/Shoping-Cart/Shop';
import Main from './layout/Main';

function App() {
  let route = createBrowserRouter([
    {path:'/',element:<Main></Main>},
    {path:'/order',element:<Shop></Shop>},
  ]);
  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
