import type { UIIcons } from "@/core/ui/UIIcon/UIIcon.enum";

export interface IItem<T> {
  value: T;
  label: string;
}

export interface IRouterItem {
  name: string;
  route?: string;
  query?: string[];
  type?: 'item' | 'group';
  routerActive?: string[];
  icon?: keyof typeof UIIcons | React.ReactNode;
  countNotification?: number;
  subsRoute?: IRouterItem[];
}