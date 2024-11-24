import { useContext } from "react";
import { StudentContext } from "../Pages/StudentContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function StudentDetails() {
    const { students, addFavourite } = useContext(StudentContext);

    return (
        <div>
            <div className="flex justify-between  bg-cyan-600 p-6 mb-8">

                <h1 className="text-4xl font-semibold flex gap-2">
                    <Link to="/">Student List</Link><FaSchool/>
                </h1>

                <h1 className="text-4xl font-semibold hover:underline">
                    <Link to="/favourite">Favourite Students List</Link>
                </h1>

            </div>

            {students.map((student, index) => (
                <div className="flex justify-between items-center font-medium mx-5 my-2 text-3xl" key={student.id}>
                    <h1>
                        {index + 1}. {student.name}
                    </h1>
                    <button
                        onClick={() => addFavourite(student.id)}
                        className=" bg-blue-500 p-2 font-medium rounded-md text-red-600 flex text-center"
                        disabled={student.isFavourite}
                    >
                        {student.isFavourite ? "Favourite" : "Add Favourite"} <FaHeart/>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StudentDetails;