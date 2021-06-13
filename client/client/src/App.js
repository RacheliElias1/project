import './App.css';
import LogIn from './componets/login';
import ViewEmployees from './componets/mainPage';
//import Details from './componets/details'


function App() {
  return (
    <div className="App">
       <ViewEmployees ></ViewEmployees>
      <LogIn></LogIn>
      {/* <Details></Details> */}
    </div>
  );
}

export default App;
