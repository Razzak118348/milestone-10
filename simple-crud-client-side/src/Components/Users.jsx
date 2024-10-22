import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const AllUser = useLoaderData();
    const [users, setUsers] = useState(AllUser)

const handleDelete =  (id) => {
    console.log(id)
fetch(`http://localhost:5000/users/${id}`,{
method:'DELETE'
})
.then(response => response.json())
.then(data => {
    // console.log(data);
    if(data.deletedCount>0){
        alert("User deleted successfully");
        const remaining = users.filter(user=>user._id !== id)
        // console.log(remaining)
        setUsers(remaining)
    }
})
}


    return (
        <div className="text-center ">
<h2 className="text-3xl font-bold">Total users : {users.length}</h2>
<div>{

   users.map(user=><p className="my-3" key={user._id}>{user.name} : {user.email}
<Link to={`/update/${user._id}`}>
<button className=" p-2 rounded-lg ml-3 bg-gray-500 hover:bg-green-400">Update</button>
</Link>

    <button onClick={()=>handleDelete(user._id)} className=" p-2 rounded-lg ml-3 bg-gray-500 hover:bg-red-500">X</button> </p>)

}
</div>


        </div>
    );
};

export default Users;