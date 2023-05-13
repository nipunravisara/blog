import React from "react";

export interface Props {
  href: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  children?: any;
  download?: string;
}

const Link = (props: Props) => {
  const {
    href,
    className,
    ariaLabel,
    title,
    disabled = false,
    download,
  } = props;

  return (
    <a
      href={disabled ? "#" : href}
      tabIndex={disabled ? -1 : 0}
      className={`@apply inline-block hover:text-skin-accent ${className}`}
      aria-label={ariaLabel}
      title={title}
      aria-disabled={disabled}
      target="_blank"
      download={Boolean(download)}
    >
      {props.children}
    </a>
  );
};

export default Link;
