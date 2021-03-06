import React from "react";
import Person from "./Person";

function NameList() {
    const names = ["Bruce", "Diana", "Clark"];

    const nameList = names.map(name => <h2>{name}</h2>)

    return <div>{nameList}</div>



  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    },
    {
      id: 3,
      name: 'Clark',
      age: 31,
      skill: 'Angular'
    }
  ]

//   const personList = persons.map(person => <Person key = {person.id} person = {person}/>)

//   return <div>{personList}</div>
}

export default NameList;
