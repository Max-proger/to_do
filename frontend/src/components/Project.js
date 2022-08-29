import React from 'react'

const ProjectListItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.repository}
            </td>
        </tr>

    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Repository
                </th>
            </tr>
            {items.map((item) => <ProjectListItem item={item} />)}
        </table>
    )
}
export default ProjectList