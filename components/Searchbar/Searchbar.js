export default function Searchbar({ search, setSearch }) {
  function handleSearch(searchString) {
    setSearch(searchString);
  }

  return (
    <>
      <form>
        <input
          placeholder="Filter: Title, Category, Country"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button type="button" onClick={() => handleSearch("")}>
          Remove
        </button>
      </form>
    </>
  );
}
