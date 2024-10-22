let students = require("./data.json");

let getAllStudents = () => {
  return students;
};
//console.log(getAllStudents())



let getFirstStudent = () => {
  return students[0];
};
//console.log(getFirstStudent())



let getLastStudent = () => {
 return students[students.length-1]
};
//console.log(getLastStudent())



let getStudentById = (id) => {
  return students.filter(el => el.id ===id)
};
//console.log(getStudentById(5))




let getStudentsByStage = (stage) => {
return students.filter(el=>el.stage===stage)
};
//console.log(getStudentsByStage("Grade 10"))




let addStudent = (newStudent) => {
students.push(newStudent)
};
// addStudent({
//   "id": 21,
//   "name": "huda mohammad",
//   "stage": "Grade 12",
//   "age": 17
// })
// console.log(students)



let removeStudentById = (id) => {
students=students.filter(el=>el.id!==id)
};
// removeStudentById(2)
// console.log(students)

let updateStudentById = (id, updatedData) => {
 return students=students.map(el=>{
    if(el.id===id)
      return(updatedData)
    else
    return el
  })
};
//console.log(updateStudentById(1,{ "id": 1,"name": "huda mohammad", "stage": "Grade 12","age": 17}))
 


let getAverageAge = () => {
  let sum= students.reduce((initial,current)=>{
   return initial+current.age
   
  },0)
  return sum/students.length
  };
  //console.log(getAverageAge ())




  let getStudentsAboveAge = (age) => {
  return students.filter(el=>el.age>age)
};
//console.log(getStudentsAboveAge(16))


let getStudentsBelowAge = (age) => {
  return students.filter(el=>el.age<age)
};
//console.log(getStudentsBelowAge(16))


let getStudentByName = (name) => {
  return students.find(el=>el.name===name)
};
//console.log(getStudentByName("Bob Brown"))


let sortStudentsByName = () => {
return students.sort((a,b)=>a.name.localeCompare(b.name))
};
//console.log(sortStudentsByName())



let sortStudentsByAge = () => {
  return students.sort((a,b)=>a.age - b.age)
};
//console.log(sortStudentsByAge())


let filterStudentsByAge = (age) => {
return students.filter(el=>el.age===age)
};
//console.log(filterStudentsByAge(15))




let filterStudentsByStage = (stage) => {
  return students.filter(el=> el.stage===stage)
};
//console.log(filterStudentsByStage("Grade 11"))


let countStudents = () => {
return students.length
};
//console.log(countStudents())



let countStudentsByStage = (stage) => {
  let no=0
  students.filter(el=>{
    if(el.stage===stage)
      no++
  })
  return no
};
//console.log(countStudentsByStage("Grade 11"))



let incrementStudentAgeById = (id) => {
  let student= students.find(el=>el.id===id) 
  student.age++
  return student.age
};
//console.log(incrementStudentAgeById(15))


let decrementStudentAgeById = (id) => {
  let student= students.find(el=>el.id===id) 
  student.age --
  return student.age
};
//console.log(decrementStudentAgeById(15))



let getStudentsWithIdGreaterThan = (id) => {
  return students.filter(el=>el.id>id)
};
//console.log(getStudentsWithIdGreaterThan(15))


let getStudentsWithIdLessThan = (id) => {
  return students.filter(el=>el.id<id)
};
//console.log(getStudentsWithIdLessThan(15))



let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter(el=>el.id>startId && el.id<endId)
};
//console.log(getStudentsInRangeOfIds(3,15))


let getTotalAgeOfStudents = () => {
return students.reduce((acc,current)=>{
 return acc+current.age
},0)
};
//console.log(getTotalAgeOfStudents())


let getAverageAgeByStage = (stage) => {
let filterd=students.filter(el=>el.stage===stage)
let sum =filterd.reduce((acc,current)=>{
return acc+current.age
},0)
return sum/filterd.length
};
//console.log(getAverageAgeByStage("Grade 12"))



let getYoungestStudent = () => {
  let oldest=students[0]
 students.filter(el=>{
  if(el.age<oldest.age)
    oldest=el
 })
 return oldest
};
//console.log(getYoungestStudent())


let getOldestStudent = () => {
 let oldest=students[0]
 students.filter(el=>{
  if(el.age>oldest.age)
    oldest=el
 })
 return oldest
};
//console.log(getOldestStudent())


let hasStudentWithName = (name) => {
  return students.find(el=>el.name===name)
};
//console.log(hasStudentWithName("Henry Young"))



let getNamesOfAllStudents = () => {
  return students.map(el=>el.name)

};
//console.log(getNamesOfAllStudents())



let getAllStudentIds = () => {
  return students.map(el=>el.id)
};
//console.log(getAllStudentIds())


let getAllStudentStages = () => {
  return students.map(el=>el.stage)
};
//console.log(getAllStudentStages())


let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter(el=>el.name[0]===letter)
};
//console.log(getStudentsWithNamesStartingWith("L"))


let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(el=>el.name.endsWith(letter))
};
//console.log(getStudentsWithNamesEndingWith("e"))



let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter(el=>el.name.length>length)
};
//console.log(getStudentsWithNameLengthGreaterThan("6"))



let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter(el=>el.name.length<length)
};

//console.log(getStudentsWithNameLengthLessThan("8"))



let getAllStudentsSortedById = () => {
  return students.sort((a,b)=> a.id - b.id) 
};
//console.log(getAllStudentsSortedById())


let reverseStudentList = () => {
return students.reverse()
};
//console.log(reverseStudentList())




let getRandomStudent = () => { 
let randomNO=Math.floor(Math.random() * students.length)
return students[randomNO]

};
//console.log(getRandomStudent()) 





let removeStudentsAboveAge = (age) => {
  return students.filter(el=>el.age<age)
}
// console.log(removeStudentsAboveAge(17)) 



let removeStudentsBelowAge = (age) => {
  return students.filter(el=>el.age>age)
};
//console.log(removeStudentsBelowAge(16)) 



let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter(el=> el.age>minAge && el.age<maxAge)
};
//console.log(getStudentsBetweenAges(14,16))




let countStudentsAboveAge = (age) => {
  let no=0
 students.filter(el=>{
    if(el.age>age)
      no++
  }  )
return no
};
//console.log(countStudentsAboveAge(15))




let countStudentsBelowAge = (age) => {
  let no=0
 students.filter(el=>{
    if(el.age<age)
      no++
  }  )
return no
};
//console.log(countStudentsBelowAge(17))




let addMultipleStudents = (newStudents) => {
  return students.push(...newStudents)


};
// addMultipleStudents([{"id": 21,"name": "melissa jone","stage": "Grade 10", "age": 15},{"id": 22,"name": "John Doe","stage": "Grade 10", "age": 15}])
// console.log(students)




let removeMultipleStudentsById = (ids) => {
 students= students.filter(el=>!ids.includes(el.id))
};
// removeMultipleStudentsById([5,3,2])
// console.log(students)




let updateMultipleStudentsById = (ids, updatedData) => {
return students.map(el=>{
  if (ids.includes(el.id)){
    return (updatedData)
   
  }
  else
  return el
  
})
};
  //console.log(updateMultipleStudentsById([1,2,3],{"id": 21,"name": "melissa jone","stage": "Grade 10", "age": 15}))

let isAllStudentsAboveAge = (age) => {
  return students.every(el=>el.age>age)
};
//console.log(isAllStudentsAboveAge(15))




let isAllStudentsBelowAge = (age) => {
  return students.every(el=>el.age<age)
};
//console.log(isAllStudentsBelowAge(15))





let hasStudentsInStage = (stage) => {
  let filterstudent=students.filter(el=>el.stage===stage)
  if(filterstudent.length>0){
    console.log("yes, there is")
  }
  else{
    console.log("no, ther is not")
  }
};
//console.log(hasStudentsInStage("Grade 11"))



let getStudentNamesWithIds = (ids) => {
 return students.filter(el=>ids.includes(el.id)).map(el=>el.name)
};
//console.log(getStudentNamesWithIds([1,2]))


