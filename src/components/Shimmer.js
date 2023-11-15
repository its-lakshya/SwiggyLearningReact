import React from "react";

const ShimmerCards = () => {
  return (
    <div className="shimmerUI" >
      <div className="shimmerImage" key="syndex"></div>
    </div>
  );
}

const Shimmer = () => {
  return (
    <div className="cards-flex" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <ShimmerCards key={index} />
        ))}
    </div>
  );
}

export default Shimmer;
