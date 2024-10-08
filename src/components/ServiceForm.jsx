import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, saveService } from '../actions/actionCreators';

function ServiceForm() {
 const item = useSelector(state => state.serviceForm);
 const dispatch = useDispatch();

 const handleChange = evt => {
  const { name, value } = evt.target;
  dispatch(changeServiceField(name, value));
 }

 const handleSubmit = evt => {
  evt.preventDefault();
  dispatch(saveService(item.id, item.name, item.price));
 }

 return (
  <form onSubmit={handleSubmit}>
   <input name='name' onChange={handleChange} value={item.name} />
   <input name='price' onChange={handleChange} value={item.price} />
   <button type='submit'>Save</button>
  </form>
 );
}

export default ServiceForm;