import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Puppy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [puppy, setPuppy] = useState();

  useEffect(() => {
    const fetchPuppy = async (id) => {
      const API_URL = "" + id;
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      setPuppy(parsedResponse.data);
    };
    fetchPuppy(id);
  }, [id]);

  const goBack = () => {
    navigate("/puppies");
  };

  return puppy ? (
    <>
      <h2>
        {puppy.name} #{puppy}
      </h2>
      <img src={puppy.imageURL} alt={puppy.name} />
      <p>{puppy.breed}</p>
      <button onClick={goBack}>Back to all Puppies</button>
    </>
  ) : (
    <p>Loading...</p>
  );
}
