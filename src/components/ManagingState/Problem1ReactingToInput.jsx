import {useState} from 'react'
export default function EditProfile() {
  const [firstName,setFirstName]=useState('Tuguldur')
  const [lastName,setLastName]=useState('Namjildorj')
  const [isEditing,setIsEditing]=useState(false)
  return (
    <form className='flex flex-col gap-3'>
      <label>
        First name:{' '}
       {
         isEditing ?
        <input className='ring-1' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>:
          <b>{firstName}</b>
       }
      </label>
      <label>
        Last name:{' '}
       {
         isEditing ?
        <input className='ring-1' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>:
          <b>{lastName}</b>
       }
      </label>
      <button className='ring-1' type="submit" onClick={(e)=>{
        e.preventDefault()
        setIsEditing(!isEditing)}}>
        {isEditing ? 'Save': 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}
