// react imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projFirestore } from '../../firebase/config';

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);  

  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    const unsub = projFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.empty) {
        setError("Could not find that recipe");
        setIsPending(false);
      }

      else {
        setRecipe(doc.data());
        setIsPending(false);
      }
    });

    return () => unsub();

  }, [id]);

  const handleClick = () => {
    projFirestore.collection('recipes').doc(id).update({
      title: 'Something different'
    });
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook</p>
        <ul>
          {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p>{recipe.method}</p>
        <button onClick={handleClick}>Update</button>
        </>
      )}
    </div>
  )
}
