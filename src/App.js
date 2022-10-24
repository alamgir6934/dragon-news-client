
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toast } from 'react-bootstrap';


function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toast></Toast>
    </div>
  );
}

export default App;
