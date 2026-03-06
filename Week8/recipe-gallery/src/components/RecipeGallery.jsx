import { recipes } from "../data/recipes";

export default function RecipeGallery() {
  return (
    <section className="recipe-gallery-section">
      <h1>Recipe Gallery</h1>
      <p className="gallery-description">
        A curated collection of delicious recipes rendered from static React data.
      </p>

      <div className="gallery">
        {recipes.map((recipe) => (
          <article className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />

            <div className="recipe-content">
              <h2 className="recipe-title">{recipe.title}</h2>
              <h3 className="ingredients-heading">Ingredients</h3>

              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Step 3
// import { recipes } from "../data/recipes";

// export default function RecipeGallery() {
//   return (
//     <section>
//       <h1>Recipe Gallery</h1>

//       <div className="gallery">
//         {recipes.map((recipe) => (
//           <article className="recipe-card" key={recipe.id}>
//             <img src={recipe.image} alt={recipe.title} />
//             <h3>{recipe.title}</h3>
//             <h4>Ingredients</h4>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// Step 2:
// import { recipes } from "../data/recipes";

// export default function RecipeGallery() {
//   return (
//     <section>
//       <h2>Recipe Gallery</h2>

//       <div className="gallery">
//         {recipes.map((recipe) => (
//           <div className="recipe-card" key={recipe.id}>
            
//             <h3>{recipe.title}</h3>

//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               width="200"
//             />

//             <h4>Ingredients</h4>

//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }