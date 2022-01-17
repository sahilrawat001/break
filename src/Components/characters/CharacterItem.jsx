import React from 'react'

const CharacterItem = ({items}) => {
    return (
        // <div>
        //  {items.name}   
        // </div>
   <div className='card'>
   <div className='card-inner'>
     <div className='card-front'>
       <img src={items.img} alt='' />
       <h1>{items.name}</h1>
     </div>
     <div className='card-back'>
       <ul>
         <li>
           <strong>Actor Name:</strong> {items.portrayed}
         </li>
         <li>
           <strong>Nickname:</strong> {items.nickname}
         </li>
         <li>
           <strong>Birthday:</strong> {items.birthday}
         </li>
         <li>
           <strong>Status:</strong> {items.status}
         </li>
       </ul>
     </div>
   </div>
 </div>



    )
}

export default CharacterItem
