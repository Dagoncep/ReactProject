// CategoryFilter.js
function CategoryFilter({ categories, onSelectCategory }) {
    return (
      <div className="category-filter">
        <select onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  export default CategoryFilter;    