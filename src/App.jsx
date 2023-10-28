
import { Billings, Dashboard, Exams, Settings, Sidebar,Student, Teachers}  from './section';
import { Routes, Route } from "react-router-dom";
import './App.css';
// import SignIn from "./SignIn/SignIn.js"
// import Register from "./SignIn/Register.js"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//    <Routes>
//     <Route path="/signin" component={SignIn} />
//     <Route path="/register" component={Register} />
//   </Routes>
//   </BrowserRouter>,
//   rootElement
// );

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <Sidebar 
        className="h-screen mb-0 mt-0 px-12 py-20"/>
        <Routes>
             <Route path="/" element={<Dashboard className="flex "/>}/>
             <Route path="/student" element={<Student/>} />
             <Route path="/teacher" element={<Teachers/>}/>
             <Route path="/billings" element={<Billings/>}/>
             <Route path="/settings" element={<Settings/>} />
             <Route path="/exams" element={<Exams/>}/>
        </Routes>
     </div>

    </>
  )
}

export default App
