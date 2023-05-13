import React from "react";
import Hr from "./Hr";
import Socials from "./Socials";

const currentYear = new Date().getFullYear();

interface Props {
  noMarginTop?: boolean;
}

const Footer: React.FC<Props> = ({ noMarginTop = false }) => {
  return (
    <footer className={noMarginTop ? "w-full" : "mt-auto w-full"}>
      <Hr noPadding />
      <div className="@apply flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4">
        <Socials centered />
        <div className="@apply my-2 flex flex-col items-center whitespace-nowrap sm:flex-row">
          <span>Copyright &#169; {currentYear}</span>
          <span className="display: none">&nbsp;|&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
