
export default function ViewEmployees(props){
    let url = 'http://localhost:3000/getAllEmployed'

    const getAllEmployed = (props) => {
        fetch(url,
            { method: 'GET' }
        ).then((response) => {
            console.log(response);
            return response.json()
        }).then((result) => {
            props.setUsers(result.users)
            return result.json()
        }).catch((error)=>{
            console.log(error);
        })
        //props.setItem(3)

    }
    const renderUsers = () => {
    return  props.allUsers&&props.allUsers.map((user,index) => {
        return user={user}
    })
    
    }
    return(
    <>
    <div>
        <ul>
            <li>
            <button onClick={getAllEmployed}>get all user from server</button>
            {renderUsers()}
            </li>
        </ul>
    </div>
    </>
    )
}