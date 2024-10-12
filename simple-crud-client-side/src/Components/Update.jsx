import { useLoaderData } from "react-router-dom";


const Update = () => {
    const LoadedUser = useLoaderData()
    console.log(LoadedUser)

    const handleDelete = event =>{
        event.preventDefault();
        const form = event.target;
        const name =  form.name.value;
        const email = form.email.value;
        console.log(name,email);
        const updateUser ={name,email}

        fetch(`http://localhost:5000/users/${LoadedUser._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                alert('User updated successfully')
            }
        })
    }

    return (
        <div>
<h3 className="ml-20 text-3xl font-bold">Update information of : {LoadedUser.name}</h3>

<form onSubmit={handleDelete} className="text-center my-5">

    <input className="border-2 my-2" type="text" placeholder="Name" name="name" />
    <br />
    <input className="border-2" type="email" placeholder="Email" name="email" defaultValue={LoadedUser?.email} />
    <br />
    <input className="border-2 my-2" type="submit" value="Update" />

</form>
        </div>
    );
};

export default Update;