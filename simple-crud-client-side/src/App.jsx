
import { Link } from 'react-router-dom';
import './App.css'

function App() {
console.log('app.jsx is running')

const handleAddUser = event =>{
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;

  const user ={name,email};
  console.log(user);
fetch('http://localhost:5000/users',{

  method:'POST',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.insertedId){
    alert('user added successfully');
    form.reset();
  }
})

}

  return (
    <>
<h2 className='text-3xl font-bold flex justify-center items-center my-10'>Simple crud </h2>
<div className='flex items-center justify-center'>
<Link to={'/users'} ><button className='text-3xl font-bold  my-4 border-2 p-2 bg-gray-500 rounded-xl hover:bg-green-500'>All users </button></Link>
</div>

<form className='grid grid-cols-1 w-1/3 mx-auto gap-4' onSubmit={handleAddUser}>
  <input className='border-2' type="text" placeholder='name' name='name' />
<input type="email" placeholder='email' className='border-2' name='email' />
<input type="submit" value='Add user'  className='border-2 '/>

</form>
    </>
  )
}

export default App
