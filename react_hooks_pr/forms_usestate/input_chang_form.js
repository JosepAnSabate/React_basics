import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    
    console.log(firstName, lastName)
   
    
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    
     function handleLastChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastChange}
            />
        </form>
    )
}
