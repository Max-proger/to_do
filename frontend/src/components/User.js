import React from "react"

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.date_creation}
            </td>
        </tr>
    )
}


const UserList = ({users}) => {
    return (
        <table>
            <tr>
                <th>
                    Username
                </th>
                <th>
                    Email
                </th>
                <th>
                    Date creation
                </th>
            </tr>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList