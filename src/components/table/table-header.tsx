import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}
export function TableHeader(props: TableHeaderProps) {
  return <th className="py-3 px-3 font-semibold text-left w-24" {...props} />;
}
