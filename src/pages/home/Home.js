// react imports
import { projFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';


export default function Home() {
  const [recipes, setRecipes] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projFirestore.collection('recipes').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError("No recipes to load");
        setIsPending(false);
      }

      else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push( { id: doc.id, ...doc.data() });
        })

        setRecipes(results);
        setIsPending(false);
      }
    
    }, (err) => {
        setError(err.message);
        setIsPending(false);
      });

    return () => unsub();
  }, []);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
