import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuivd4 } from "uuid";
import AddEmployee from "../components/AddEnployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";
function Employees() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 2,
      name: "Minjeong",
      role: "Manager",
      img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
    },
    {
      id: 3,
      name: "Winter",
      role: "Developer",
      img: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?",
    },
    {
      id: 4,
      name: "Oscar",
      role: "Developer",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
    },
    {
      id: 5,
      name: "Tristan",
      role: "Developer",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
    },
    {
      id: 6,
      name: "Tiwes",
      role: "Developer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
  ]);
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole }; //... iispread sa name pati sa role
        // return {img: employee.img, name: newName, role: newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    //adding employee
    const newEmployee = {
      id: uuivd4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );

              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                ></Employee>
              );
            })}
            ;
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employee</p>
      )}
    </div>
  );
}

export default Employees;
