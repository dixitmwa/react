import { useMemo, useState } from "react";

export const useFilteredList = (categoriesList: any, range: number) => {
  const [categoryListStart, setCategoryListStart] = useState(0);
  const [categoryListEnd, setCategoryListEnd] = useState(
    range > categoriesList.length ? 2 : range
  );

  const shiftLeft = () => {
    setCategoryListStart((start) => {
      if (categoryListEnd < categoriesList.length) {
        return start + 1;
      } else {
        return 0;
      }
    });
    setCategoryListEnd((end) => {
      if (categoryListEnd < categoriesList.length) {
        return end + 1;
      } else {
        return range;
      }
    });
  };

  const shiftRight = () => {
    setCategoryListStart((start) => {
      if (categoryListStart > 0) {
        return start - 1;
      } else {
        return categoriesList.length - range;
      }
    });
    setCategoryListEnd((end) => {
      if (categoryListEnd > range) {
        return end - 1;
      } else {
        return categoriesList.length;
      }
    });
  };

  const filteredCategoriesList = useMemo(() => {
    return categoriesList.slice(categoryListStart, categoryListEnd);
  }, [categoriesList, categoryListStart, categoryListEnd]);

  return { filteredCategoriesList, shiftLeft, shiftRight };
};


export const smoothScrollToElement = (elementId: any) => {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
