import React from 'react'

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
            </tr>
            {items.map((item) => <ToDoListItem item={item} />)}
        </table>
    )
}