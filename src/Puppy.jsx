import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Puppy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [puppy, setPuppy] = useState();

  useEffect(() => {
    const fetchPuppy = async (id) => {
      const API_URL =
        "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-CHARLES" +
        id;
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      setPuppy(parsedResponse.data);
    };
    fetchPuppy(id);
  }, [id]);

  const goBack = () => {
    navigate("/puppylist");
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
