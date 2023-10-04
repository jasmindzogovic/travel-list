export function Stats({ numItems, packedItems, packedPercentage }) {
    if (!numItems)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list.</em>
        </p>
      );
  
    return (
      <footer className="stats">
        <em>
          {packedPercentage === 100
            ? "You have everything. You are ready to go."
            : `💼You have ${numItems} items on your list, and you already packed
          ${packedItems} (${packedPercentage}%).`}
        </em>
      </footer>
    );
  }
  