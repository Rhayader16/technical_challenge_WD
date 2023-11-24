import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PhoneDetails({ phonesList }) {
  const [PhoneDetails, setPhoneDetails] = useState(null);
  const [fetchDetails, setFetchDetails] = useState(true);

  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPhoneDetils();
  }, [phoneId]);

  const getPhoneDetails = async () => {
    setFetchDetails(true);
    const phoneToRender = phonesList.find(
      (eachPhone) => eachPhone.id === Number(phoneId)
    );

    setTimeout(() => {
      if (!phoneToRender) {
        navigate("/not-found");
        return;
      }
      setPhoneDetails(phoneToRender);
      setFetchDetails(false);
    }, 500);
  };

  if (fetchDetails) {
    return <p>Loading...</p>;
  }

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    imageFileName,
  } = PhoneDetails;

  return (
    <>
      <div>
        <img src={`/assets/images/${imageFileName}`} />
      </div>
      <div>
        <h1>
          {name} by {manufacturer}
        </h1>
        <p>{description}</p>
      </div>
      <ul>
        <li>Color: {color}</li>
        <li>{screen}</li>
        <li>
          Processor: {processor}. Ram: {ram}
        </li>
        <li>Starting from: {price} €</li>
      </ul>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
}

export default PhoneDetails;
