import { Route, Routes } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
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
