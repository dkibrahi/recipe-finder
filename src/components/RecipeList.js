// other import
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projFirestore } from '../firebase/config';

// styles
import './RecipeList.css';

// img 
import trashIcon from '../assests/delete-icon.svg';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className='error'>No recipes found....</div>
  }

  const handleClick = (id) => {
    projFirestore.collection('recipes').doc(id).delete();
  }

  return (
    <div className="recipe-list">
        {recipes.map((recipe) => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                <img 
                  class='delete'
                  src={trashIcon}
                  onClick={() => handleClick(recipe.id)}
                  alt='trash can icon'
                />
            </div>
        ))}
    </div>
  )
}
