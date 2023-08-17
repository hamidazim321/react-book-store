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
      <p className="heading">Add New Book</p>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input placeholder="Book title" value={inputValue} onChange={(e) => { handleChange(e); }} />
        <select>
          <option>Action</option>
          <option>Action</option>
          <option>Action</option>
        </select>
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
