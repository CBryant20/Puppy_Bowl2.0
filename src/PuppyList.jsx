import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PuppyList() {
  const [puppies, setPuppies] = useState();

  useEffect(() => {
    const fetchPuppies = async () => {
      const API_URL = "";
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      setPuppies(parsedResponse);
    };

    fetchPuppies();
  }, []);

  return (
    <ul>
      {puppies?.map((puppy) => (
        <li key={puppy.id}>
          <h2>
            <Link to={`/puppies/${puppy.id}`}>
              {puppy.name} #{puppy.id}
            </Link>
          </h2>
          <p>{puppy.breed}</p>
        </li>
      ))}
    </ul>
  );
}
