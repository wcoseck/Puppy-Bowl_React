import { Link } from "react-router-dom";
import { useGetPuppiesQuery } from "./puppySlice";
import { useEffect, useState } from "react";
/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  const { data: puppies, isLoading } = useGetPuppiesQuery();
  const [searchInput, setSearchInput] = useState('');

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const filteredPuppies = puppies.filter((puppy)=>
    puppy.name.includes(searchInput)
  )

  // TODO: Get data from getPuppies query

  return (
    <>
    <div id="searchBar">
      <input id="search"
      type="text"
      placeholder="Search for pups here"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}></input>
    </div>
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {filteredPuppies &&
          filteredPuppies.map((p) => (
            <li key={p.id}>
              <h3>
                {p.name} #{p.id}
              </h3>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
              <Link to={`/${p.id}`}>
                <button onClick={() => setSelectedPuppyId(p.id)}>
                  See details
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </article>
          </>
  );
}


