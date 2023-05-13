import { SOCIALS } from "@config";
import LinkButton from "./LinkButton";

import socialIcons from "@assets/socialIcons";
import React from "react";

interface Props {
  centered?: boolean;
}

function Socials(props: Props) {
  const { centered = false } = props;

  return (
    <div className={`social-icons ${centered ? "flex" : ""}`}>
      {SOCIALS.filter(social => social.active).map(social => (
        <LinkButton
          key={social.name}
          href={social.href}
          className="link-button"
          title={social.linkTitle}
        >
          <span
            dangerouslySetInnerHTML={{ __html: socialIcons[social.name] }}
          />
        </LinkButton>
      ))}
    </div>
  );
}

export default Socials;
