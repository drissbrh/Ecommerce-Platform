import React from "react";
import "./Paginate.css";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page }) => {
  return (
    pages > 1 && (
      <div className="paginate">
        {[...Array(pages).keys()].map((x) => (
          <Link to={`/page/${x + 1}`} key={x + 1} active={x + 1 === page}>
            {x + 1}
          </Link>
        ))}
      </div>
    )
  );
};

export default Paginate;
