import React from 'react';

// class FormSearch extends Component {
//   render() {
//       // function handleClick(e) {
//       //   var userName = document.getElementById('ghusername').value;
//       //   e.preventDefault();
//       //   console.log(`${baseUrl}/${userName}`);
//       // }
//     return (
//         <form id="myForm" onSubmit={this.props.search}>
//           <input type="text" 
//                   name="ghusername" 
//                   id="ghusername" 
//                   placeholder="Github username..."/>
//           <input type="submit" 
//                 value="Pull USer Data"/>   
//         </form>
//     );
//   }
// }
const FormSearch = (props) => (
  <div className="row justify-content-center form-user-row">
    <form className="w-100 form_input" id="myForm" onSubmit={props.search}>
      {/* <div className="form-row mb-2"> */}
        <input 
          className="form-control form_input_search"
          type="text" 
          name="ghusername" 
          id="ghusername" 
          placeholder="Github username..."/>
      {/* </div> */}
      {/* <div className="form-row_search"> */}
        <input 
          className="btn form_input_btn"
          type="submit" 
          value=""/> 
      {/* </div> */}
    </form>
  </div>
);

export default FormSearch;
