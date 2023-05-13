import React from "react";

export interface Props {
  href: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  children?: any;
}

const Link = (props: Props) => {
  const { href, className, ariaLabel, title, disabled = false } = props;

  return (
    <a
      href={disabled ? "#" : href}
      tabIndex={disabled ? -1 : 0}
      className={`group inline-block px-1.5 ${className}`}
      aria-label={ariaLabel}
      title={title}
      aria-disabled={disabled}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

export default Link;
