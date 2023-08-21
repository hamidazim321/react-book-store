import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../redux/categories/categories';
import '../styles/Categories.css';

export default function Categories() {
  const { categoryList } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  if (categoryList.length < 1) {
    dispatch(setStatus('Under construction'));
  }
  return (
    <div className="categories">
      <h1>{categoryList}</h1>
    </div>
  );
}
