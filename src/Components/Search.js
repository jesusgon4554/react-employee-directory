import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';
import "./Search.css"

function Search(){
    // stores characters entered into search input
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
    function updateSearch({target}){
        // just using for readability
        const searchTerm = target.value
        // updates the value in search input, equals what is saved in state
        setSearch(searchTerm)
        // filters the employees based search input
        const filterResult = employees.filter(function(employee){
            // Looks at every employee first name, makes the name lowercase, 
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        setDisplayedEmployees([...filterResult])
    }
    // every letter entered triggers the onChange event.
    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;