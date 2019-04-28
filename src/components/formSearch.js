import React from 'react';

const FormSearch = (props) => (
  <div className="row justify-content-center form-user-row">
    <form className="w-100 form_input" id="myForm" onSubmit={props.search}>
        <input 
          className="form-control form_input_search"
          type="text" 
          name="ghusername" 
          id="ghusername" 
          placeholder="Github username..."/>
        <input 
          className="btn form_input_btn"
          type="submit" 
          value=""/> 
    </form>
  </div>
);

export default FormSearch;
