import BookCard from './components/Book';

function App() {
  const obj = {
    title: 'TITLE 1',
    category: 'ACTION',
    author: 'AUTHOR 1',
    progress: '64',
    chapter: '17',
  };
  return (
    <div className="App">
      <BookCard BookObject={obj} />
    </div>
  );
}

export default App;
