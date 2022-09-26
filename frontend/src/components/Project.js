import React from 'react'
import {Link} from 'react-router-dom'

const ProjectListItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.repository}
            </td>
            <td>
                <button onClick={()=>deleteProject(item.id)} type='button'>delete</button>
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
                <th>
                </th>
            </tr>
            {items.map((item) => <ProjectListItem item={item} deleteProject={deleteProject}/>)}
        </table>
        <Link to='/projects/create'>Create</Link>
    )
}
export default ProjectList