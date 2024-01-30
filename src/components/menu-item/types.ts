export interface IMenuItem {
  icon: string;
  route?: `/${string}` | `https://${string}`;
  label: string;
  children?: IMenuItem[];
  isExpanded?: boolean;
}
