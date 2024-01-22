// "use client"
// import { useState } from "react";

// const Page = () => {
//   const [id, setID] = useState('');

//   const handleDelete = async () => {
//     try {
//       if (!id) {
//         console.error('User ID is missing.');
//         return;
//       }

//       await fetch(`http://localhost:3000/del?id=${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       });

//       console.log('User deleted successfully');
//       // Add any additional logic or UI updates after successful deletion
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   return (
//     <div>
//       <div className='grid grid-cols-6 gap-3 bg-green-500'>
//         {/* Display the serial number */}
//         <input
//           type='text'
//           placeholder='User ID'
//           className='p-3 bg-green-300 text-lg rounded-lg'
//           value={id}
//           onChange={(e) => setID(e.target.value)}
//         />
//       </div>
//       <button onClick={handleDelete}>Delete User</button>
//     </div>
//   );
// };

// export default Page;
