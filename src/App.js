import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentProvider } from "./Pages/StudentContext";
import StudentDetails from "./Components/StudentDetails";
import FavouriteStudent from "./Components/FavouriteStudent";

function App() {  
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetails />} />         
          <Route path="/favourite" element={<FavouriteStudent />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;