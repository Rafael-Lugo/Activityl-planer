import { CancelButton } from "../Activity-Details/StyledActivityDetails";

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
        <CancelButton type="button" onClick={() => handleSearch("")}>
          Remove
        </CancelButton>
      </form>
    </>
  );
}
