
import React from 'react';


const students = [
    {
      id:1 ,
      name: 'Nguyễn Văn A',
      age: 30,
      address: 'Hà Nội',
    },
    {
      id:2,
      name: 'Nguyễn Văn B',
      age: 29,
      address: 'Đà Nẵng'
    }
  ]
class Students extends React.Component{
    constructor(props){
      super(props);
    }
    render() {
      return <table className='table' style={{border:1}}>
        <thead>
          <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Age</th>
             <th>Address</th>
         </tr>
        </thead>
        <tbody>
        {students.map((student) => {
          return (
          <tr key={student.id}>
             <td>{student.id}</td>
             <td>{student.name}</td>
             <td>{student.age}</td>
             <td>{student.address}</td>
        </tr>
          );
        })}
        </tbody>
      </table>;
    }
  }

  export default Students;