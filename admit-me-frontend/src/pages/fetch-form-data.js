import React from "react";
import { useEffect, useState } from "react";
import '../styles/fetchForm.css';
export default function FetchFormData() {
  const [students, setStudents] = useState();

   useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('https://6416c7ce3a29ed1a1d9ae1dd--silver-bublanina-a72c31.netlify.app/fetchRecords')
         .catch((err) => {
            console.log(err.message);
         });
         const jsonData = await data.json();
         setStudents(jsonData)
        }
        fetchData();
   }, []);



  return (
    <div className="container" id="fetchformdata">
      <h3>Data will be fetched in a second automatically.</h3>
      <div className="flex flex-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
            <th>Aid</th>
          </tr>
        </thead>
        <tbody>
      {students?.map((student) => {
        return (
          <tr key={student.id}>               
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.standard}</td>
                <td>{student.division}</td>
                <td>{student.gender}</td>
                <td>{student.aid}</td> 
              </tr>
        );
      })}
      </tbody>
      </table>
    </div>
    </div>
  );
}
