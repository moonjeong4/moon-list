// export default function Stats({ items }) {
//   if (!items.length)
//     return (
//       <p className="mb-2 mr-4 text-center text-2xl text-yellow-200 ">
//         <em>Start making the list 📝</em>
//       </p>
//     );

//   const numItems = items.length;
//   const numChecked = items.filter((item) => item.checked).length;
//   const percentage = Math.round((numChecked / numItems) * 100);

//   return (
//     <footer className="mb-2 mr-4 text-center text-2xl text-yellow-200 ">
//       <em>
//         {percentage === 100
//           ? 'You got everything!'
//           : `${numItems} items, cleared ${numChecked} (${percentage}%)`}
//       </em>
//     </footer>
//   );
// }
