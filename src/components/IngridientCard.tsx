import React from 'react';

// Definimos la interfaz para que coincida con el DTO
interface Ingredient {
  name: string;
}

interface IngredientProps {
  ingredient: Ingredient;
}

const IngredientCard: React.FC<IngredientProps> = ({ ingredient }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Ingredient Details</h2>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-1">Name:</label>
          <p className="text-gray-600">{ingredient.name}</p>
        </div>

        <div className="mt-6">
          <p className="text-gray-500 text-sm">
            This is a brief description of the ingredient. For example, the ingredient can be a Carrot, Onion, Fish, etc. This description helps to better understand the ingredient’s use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
