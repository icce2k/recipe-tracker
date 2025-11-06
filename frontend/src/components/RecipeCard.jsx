import React from 'react';
import { UtensilsCrossed } from "lucide-react";

export default function RecipeCard({ recipe, onView }) {
  const { title, ingredients, steps } = recipe;

  // show only first 2 ingredients & 1 step as preview
  const previewIngredients = ingredients.slice(0, 2).join(", ") + (ingredients.length > 2 ? "..." : "");
  const previewStep = steps[0] ? steps[0].slice(0, 60) + (steps[0].length > 60 ? "..." : "") : "";

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition border border-base-300">
      <div className="card-body">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <UtensilsCrossed className="text-primary" size={20} />
          <h2 className="card-title text-lg font-bold text-base-content">{title}</h2>
        </div>

        {/* Ingredients preview */}
        <p className="text-sm text-base-content/80">
          <span className="font-semibold">Ingredients:</span> {previewIngredients}
        </p>

        {/* Steps preview */}
        <p className="text-sm text-base-content/80 mt-1">
          <span className="font-semibold">Steps:</span> {previewStep}
        </p>

        {/* View button */}
        <div className="card-actions justify-end mt-3">
          <button
            className="btn btn-sm btn-primary rounded-full"
            onClick={() => onView && onView(recipe)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
