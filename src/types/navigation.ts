export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
  disabled?: boolean;
  badge?: string;
}

export interface NavSection {
  title?: string;
  items: NavLinkItem[];
}
