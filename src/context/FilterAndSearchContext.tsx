import { createContext, useState, useContext } from "react";

interface Types {
    brand: string | null,
    setBrand: (value: string) => void,
    search: string | null,
    setSearch: (value: string) => void,
}

const FilterAndSearchContext = createContext<Types>({
  brand: null,
  setBrand: () => {},
  search: null,
  setSearch: () => {},
});

export const FilterAndSearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [brand, _setBrand] = useState<string | null>(null);
  const [search, _setSearch] = useState<string | null>(null);

  const setBrand = (value: string) => {
    _setSearch(null)
    if (!value) {
        _setBrand(null)
    }
    _setBrand(value);
  };
  const setSearch = (value: string) => {
    _setBrand(null)
    _setSearch(value);
  };

  return (
    <FilterAndSearchContext.Provider
      value={{ brand, setBrand, search, setSearch }}
    >
      {children}
    </FilterAndSearchContext.Provider>
  );
};

export const useFilterAndSearchContext = () => useContext(FilterAndSearchContext)
