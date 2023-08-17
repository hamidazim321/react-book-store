import { Route, Routes } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Categories from './components/Categories';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BookList />
              <BookForm />
            </>
        )}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
