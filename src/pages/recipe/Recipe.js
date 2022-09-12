// react imports
import { useParams } from 'react-router-dom';

// styles
import './Recipe.css'

export default function Recipe() {
  const { info } = useParams();
  console.log(info);

  return (
    <div>Recipe</div>
  )
}
