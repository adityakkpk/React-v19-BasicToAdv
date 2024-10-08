import './EV.css'
import { useState } from 'react'

//-----------Using Normal Variable-----------
// const users = [
//     { name: 'John', age: '36' },
//     { name: 'Doe', age: '37' },
//     { name: 'Jane', age: '38' },
//     { name: 'Mary', age: '39' },
//     { name: 'Peter', age: '40' },
//     { name: 'Kate', age: '41' },
//     { name: 'Lisa', age: '42' },
// ]

//-----------Using useState()-----------

export const DerrivedState = () => {

    const [users, setUsers] = useState([
        { name: 'John', age: '36' },
        { name: 'Doe', age: '37' },
        { name: 'Jane', age: '38' },
        { name: 'Mary', age: '39' },
        { name: 'Peter', age: '40' },
        { name: 'Kate', age: '41' },
        { name: 'Lisa', age: '42' },
    ])


    //------------Derived State---------------
    // Because here values are derived from the state
    const usersCount = users.length;

    const averageAge = users.reduce((acc, curElem) => acc + Number(curElem.age), 0) / usersCount;

    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => {
                    return <li key={index}>{user.name} - {user.age} year old</li>
                })}
            </ul>
            <p>Total Users: {usersCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
    )
}