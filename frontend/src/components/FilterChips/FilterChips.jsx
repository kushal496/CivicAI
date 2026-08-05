import "./FilterChips.css";

const categories = [
  "All Categories",
  "Agriculture",
  "Education",
  "Healthcare",
  "Housing",
  "Employment",
  "Women & Child",
  "Finance",
];

function FilterChips({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filter-chips">

      {categories.map((category) => (

        <button
          key={category}
          className={
            selectedCategory === category
              ? "active"
              : ""
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default FilterChips;