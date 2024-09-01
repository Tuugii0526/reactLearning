import {useState} from 'react'
const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
  ];
const Contact=({contact})=>{
 const [showEmail,setShowEmail]=useState(false)
 return <div className='p-5 ring-1 mb-2 rounded-sm'>
    <h2>{contact.name}</h2>
    {
        showEmail ?
        (
        <>
        <p>{contact.email}</p>
        <button className='ring-1 rounded-sm' onClick={()=>{
            setShowEmail(!showEmail)
        }}>Hide email</button>
        </>
        ):
        (
        <button className='ring-1 rounded-sm' onClick={()=>{
            setShowEmail(!showEmail)
        }}>Show email</button>
        )
    }
 </div>
}
export const FixMisplacedStateInTheList=()=>{
const [reverse,setReverse]=useState(false)
const displayedContacts=[...contacts]
if(reverse)
{
    displayedContacts.reverse()
}
return <div>
    <label htmlFor="">
        <input type="checkbox" checked={reverse} onChange={(e)=>{
            setReverse(e.target.checked)
        }}/>
        {' '}
        Show in reverse order
    </label>
   <ul>
   {
        displayedContacts.map((contact)=>

        ( <li key={contact.id}>
            
              <Contact  contact={contact}/>
            
         </li>)
        )
    }
   </ul>
</div>
}