import { createContext, useState } from "react";

export const StudentContext = createContext(); 

export const StudentProvider = ({ children }) => {

    const [students, setStudents] = useState([ 
        {
            id: 1,
            name: "Surendiran",
            isFavourite: false
        },

        {
            id: 2,
            name: "Vijay",
            isFavourite: false
        },
        {
            id: 3,
            name: "Suriya",
            isFavourite: false
        },
        {
            id: 4,
            name: "Nicky",
            isFavourite: false
        },
        {
            id: 5,
            name: "Lokesh",
            isFavourite: false
        },
    ]);

   
    const addFavourite = (id) => {
        const updatedStudents = students.map((student) => {
            if (student.id === id) {
                return { ...student, isFavourite: true };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

  

    const removeFavourite = (id) => {
        const updatedStudents = students.map((student) => {
            if (student.id === id) {
                return { ...student, isFavourite: false };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    return (
       
        <StudentContext.Provider value={{ students, addFavourite, removeFavourite }}> 
            {children}
        </StudentContext.Provider>
    );
};