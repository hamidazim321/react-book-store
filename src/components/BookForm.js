import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/BookForm.css';

export default function BookForm() {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      category,
      title: inputValue,
      item_id: uuidv4(),
      progress: 0,
      state: 'Chapter 1',
    };
    dispatch(addBook(obj));
    setInputValue('');
  };

  return (
    <div className="add-book">
      <span className="hr-line" />
      <p className="heading">ADD NEW BOOK</p>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input className="input-title" placeholder="Book title" value={inputValue} onChange={(e) => { handleInput(e); }} />
        <select className="select-category" onChange={(e) => handleSelect(e)}>
          <option className="select-placeholder">Category</option>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button className="submit-form" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
