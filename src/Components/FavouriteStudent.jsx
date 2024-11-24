import { useContext } from "react";
import { StudentContext } from "../Pages/StudentContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";



function FavouriteStudent() {
    const { students, removeFavourite } = useContext(StudentContext);

    return (
        <div>
            <div className="flex justify-between  bg-[#e1e2d1] p-6 mb-8">

                <h1 className="text-4xl font-semibold flex gap-2 hover:underline">
                    <Link to="/">Student List</Link>
                </h1>

                <h1 className="text-4xl font-semibold">
                    <Link to="/favourite">Favourite Students List</Link>
                </h1>

            </div>

            {students
                .filter((student) => student.isFavourite)
                .map((student, index) => (
                    <div className="flex justify-between items-center font-medium mx-5 my-2 text-3xl" key={student.id}>
                        <h1>
                            {index + 1}. {student.name}
                        </h1>
                        <button
                            onClick={() => removeFavourite(student.id)}
                            className="bg-[#e72929] font-medium p-1 rounded-md border border-black flex"
                        >
                            Remove <FaTrash/>
                        </button>
                    </div>
                ))}
        </div>
    );
}

export default FavouriteStudent;