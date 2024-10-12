import { useLoaderData } from "react-router-dom";

const Users = () => {
    const AllUser = useLoaderData();
const handleDelete =  (id) => {
    console.log(id)
fetch(`http://localhost:5000/users/${id}`,{
method:'DELETE'
})
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.deletedCount>0){
        alert("User deleted successfully");
    }
})
}


    return (
        <div className="text-center ">
<h2 className="text-3xl font-bold">{AllUser.length}</h2>
<div>{

   AllUser.map(user=><p  key={user._id}>{user.name} : {user.email} <button onClick={()=>handleDelete(user._id)} className=" p-2 rounded-lg ml-3 bg-gray-500 hover:bg-red-500">X</button> </p>)

}
</div>
        </div>
    );
};

export default Users;