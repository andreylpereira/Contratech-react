/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Breadcrumb.css";

export default (props) => {
  const unique = props.unique;

  return unique != null ? 
  (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-light shadow w-75 mt-5 container-fluid">
          <li class="breadcrumb-item active">       
              {props.unique}
          </li>
        </ol>
      </nav>
    </div>
  ) 
  :
   (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-light shadow w-75 mt-5 container-fluid">
          <li class="breadcrumb-item">
            <a class="text-dark" href={props.router}>
              {props.item}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {props.active}
          </li>
        </ol>
      </nav>
    </div>
  );
};

// if (unique != null) {
//   return (
//     <div>
//       <nav aria-label="breadcrumb">
//         <ol class="breadcrumb bg-light shadow w-75 mt-5 container-fluid">
//           <li class="breadcrumb-item">
//             <a class="text-dark" href="#">
//               {props.unique}
//             </a>
//           </li>
//         </ol>
//       </nav>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <nav aria-label="breadcrumb">
//         <ol class="breadcrumb bg-light shadow w-75 mt-5 container-fluid">
//           <li class="breadcrumb-item">
//             <a class="text-dark" href={props.router}>
//               {props.item}
//             </a>
//           </li>
//           <li class="breadcrumb-item active" aria-current="page">
//             {props.active}
//           </li>
//         </ol>
//       </nav>
//     </div>
//   );
// }
