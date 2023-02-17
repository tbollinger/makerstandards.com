import React, {ReactNode} from "react";
import cn from "clsx";

export interface ButtonInterface {
  /**
   * What kind of button is it?
   */
  color?: 'sun' | 'ocean' | 'grass' | 'darling';

  /**
   * Size large or small
   */
  size?: 'xl' | 'lg' | 'sm';

  /**
   * Button contents
   */
  label: string;

  type?: 'button' | 'submit' | 'reset';

  /**
   * Optional click handler
   */
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({size = 'lg', color, label, type = 'button', children, ...props}: ButtonInterface) => {
  color = color || 'sun';

  const size_classes = (s: string) => {
    switch (s) {
      case 'xl':
        return `px-5 py-3 sm:px-10`
      case 'lg':
        return `px-3.5 py-1.5`
      case 'sm':
        return 'px-2 py-0.5';
    }
  }

  const color_classes = (c: string) => {
    switch (c) {
      case 'sun':
        return `bg-sun-500 hover:bg-sun-200 focus-visible:outline-sun-600 text-black`;
      case 'ocean':
        return `bg-ocean-500 hover:bg-ocean-300 focus-visible:outline-ocean-600 text-white`;
      case 'grass':
        return `bg-grass-500 hover:bg-grass-200 focus-visible:outline-grass-600 text-black`;
      case 'darling':
        return `bg-darling-500 hover:bg-darling-300 focus-visible:outline-darling-600 text-white`;
      default:
        return `bg-white hover:bg-gray-100 focus-visible:outline-black text-black`;
    }
  }

  return (
    <button {...props} type={type} className={cn(
      color_classes(color),
      size_classes(size),
      `border-2 border-black rounded-md text-base font-semibold leading-7 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center`
    )}>
      {children}
      {label}
    </button>
  )
}
