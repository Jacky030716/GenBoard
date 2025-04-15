import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

// export const debounce = (func: Function, delay: number) => {
//   let timeoutId: NodeJS.Timeout;
//   return function (...args: any[]) {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };
