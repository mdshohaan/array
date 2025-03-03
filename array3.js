// * 21
// const employees = [
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 70000 },
//   { name: "Charlie", salary: 60000 }
// ];
// const res = Math.max(...employees.map(emp =>emp.salary))
// console.log(res);

//* 22 
// const departments = [
//   { id: 1, name: "HR" },
//   { id: 2, name: "Engineering" },
//   { id: 3, name: "Marketing" },
//   { id: 4, name: "Sales" },
// ];
// const res = departments.some(dept => dept.name === "Sales")
// const res = departments.find(dept => dept.name === "Sales")
// const res = departments.filter(dept => dept.name === "Sales")
// console.log(res);

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// const emp = employees.map(empl => empl.name)
// console.log(emp);
// const res = (employees,threshold = 6000)=>{
//   return employees.filter(emp => emp.salary > 6000)
// }

// console.log(res(employees));
// const res = employees.reduce((a,b)=>b.salary+a ,0)  
// console.log(res);
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// const totalSalary = employees.reduce(
//   (total, currentValue, currentIndex, arr) => {
//     console.log(`Index: ${currentIndex}, Employee: ${currentValue.name}, Salary: ${currentValue.salary}`);
//     return total + currentValue.salary;
//   },
//   0
// );

// console.log('Total Salary:', totalSalary);