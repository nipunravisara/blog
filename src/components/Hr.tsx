import React from "react";

interface Props {
  noPadding?: boolean;
  ariaHidden?: boolean;
}

const Hr: React.FC<Props> = ({ noPadding = false, ariaHidden = true }) => {
  return (
    <div className={`mx-auto max-w-3xl ${noPadding ? "px-0" : "px-4"}`}>
      <hr className="border-skin-line" aria-hidden={ariaHidden} />
    </div>
  );
};

export default Hr;
