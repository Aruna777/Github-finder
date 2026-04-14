import { SearchBar } from "../components/Searchbar";

export function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>GitHub Profile Finder</h1>
        <p>Search any GitHub user and explore their profile</p>
      </header>
      <SearchBar />
    </div>
  );
}
