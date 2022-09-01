import './App.css';
// import SideNavbar from './Components/Navbar/SideNavbar';
// import TopNavbar from './Components/Navbar/TopNavbar';
// import RouterProvider from './Router/index';
import UsersTable from './UserTable/UsersTable';



function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-2">
          <SideNavbar/>
        </div>
        <div className="col-10 bg-light">
          <div className="row">
            <TopNavbar/>
            <RouterProvider/>
            
          </div>          
        </div> */}
            <UsersTable/>
        
      </div>
    </div>
  );
}

export default App;
