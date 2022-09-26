import React from 'react'
import {Link} from 'react-router-dom'

const ToDoListItem = ({item}) => {
    return(
        <tr>
            <td>
                {item.project}
            </td>
            <td>
                {item.note_creator}
            </td>
            <td>
                {item.txt}
            </td>
            <td>
                {item.update_date}
            </td>
            <td>
                {item.active}
            </td>
            <td>
                <button onClick={()=>deleteTodo(item.id)} type='button'>delete</button>
            </td>
        </tr>
    )
}

const ToDoList = ({items}) => {
    return (
        <table>
            <tr>
                <th>
                    Project
                </th>
                <th>
                    Creator
                </th>
                <th>
                    Text
                </th>
                <th>
                    Update date
                </th>
                <th>
                    Status
                </th>
                <th>
                </th>
            </tr>
            {items.map((item) => <ToDoListItem item={item} deleteTodo={deleteTodo}/>)}
        </table>
        <Link to='/todos/create'>Create</Link>
    )
}

export default ToDoList