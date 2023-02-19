import React from "react";
import { useEffect, useState } from "react";
export default function FetchFormData() {
  const [students, setStudents] = useState();

   useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('http://192.168.0.79:8093/fetchRecords')
        //  .then((res) => res.json())
        //  .then((data) => {
        //   console.log(data)
        //     setStudents(data)
        //  })
        
         .catch((err) => {
            console.log(err.message);
         });
         const jsonData = await data.json();
         setStudents(jsonData)
        }
        fetchData();
   }, []);



  return (
    <div>
      <p>Data will be fetched in a second automatically.</p>
      ooo
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
