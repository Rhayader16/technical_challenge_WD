import React from "react";
import { Link } from "react-router-dom";

function MyNavbar({ phoneList }) {
  return (
    <Container>
      <Link to={`/`}>Home</Link>
      <Nav>
        {phoneList.map((eachPhone) => {
          return (
            <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id}>
              {eachPhone.name}
            </Link>
          );
        })}
      </Nav>
    </Container>
  );
}

export default MyNavbar;
