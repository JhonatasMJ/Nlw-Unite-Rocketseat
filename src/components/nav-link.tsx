import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  props.children;
  return (
    <a {...props} href={props.href} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
