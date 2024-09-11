import React, { useEffect, useState } from 'react';
import IngredientCard from './IngridientCard';

// Definimos el tipo de ingrediente, como en el DTO
interface Ingredient {
  name: string;
}

const IngredientList: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Función para obtener los ingredientes desde la API
  const fetchIngredients = async () => {
    try {
      const response = await fetch('http://localhost:3000/ingredients'); // Cambia por tu endpoint real
      const data = await response.json();
      setIngredients(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setLoading(false);
    }
  };

  // Llamamos a la API cuando el componente se monta
  useEffect(() => {
    fetchIngredients();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading ingredients...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Ingredient List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <IngredientCard key={index} ingredient={ingredient} />
          ))
        ) : (
          <div className="text-center col-span-3">No ingredients found</div>
        )}
      </div>
    </div>
  );
};

export default IngredientList;
