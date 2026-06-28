import React, { useEffect } from "react";
import "../../_dist/InvitationPage.css";
import { useNavigate } from "react-router";

const InvitationPage = () => {
  const navigate = useNavigate();
  const targetUrl = "/welcome";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(targetUrl);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClick = () => {
    navigate(targetUrl);
  };
  return (
    <section className="invitation-container">
      <img
        src="./images/INVITATION.png"
        alt="invitation speciale"
        onClick={handleClick}
      />
    </section>
  );
};

export default InvitationPage;
