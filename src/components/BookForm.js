import { useState } from 'react';
import '../styles/BookForm.css';

export default function BookForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('');
  };

  return (
    <div className="add-book">
      <span className="hr-line" />
      <p className="heading">ADD NEW BOOK</p>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input className="input-title" placeholder="Book title" value={inputValue} onChange={(e) => { handleChange(e); }} />
        <select className="select-category">
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
