// ShowData.js
// import React from "react";
// import data from "./Data";

import { data } from "./Data"

// const ShowData = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">User List</h2>
//       <ul className="space-y-2">
//         {data.map((item) => (
//           <li key={item.id} className="p-3 border rounded shadow-sm">
//             <p><strong>Name:</strong> {item.name}</p>
//             <p><strong>Age:</strong> {item.age}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShowData;





// export const convert=(key)=>{

//     const index = data.findIndex(item => item.key === key);
// console.log(index); 

// return data[index].value;

// }
// export const convert = (key) => {
//   const index = data.findIndex(item => item.key === key);

//   if (index === -1) {
//     console.warn(`Translation not found for key: "${key}"`);
//     return key; // fallback to original key
//   }

//   return data[index].value;
// };

export const convert = (key) => {
  key = key.split(/\r?\n/).join("")
  const item = data.find(item => item.key === key);
  return item?.value || key; // fallback if not found
};