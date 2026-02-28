export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your travel list</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything. Lets go!"
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
