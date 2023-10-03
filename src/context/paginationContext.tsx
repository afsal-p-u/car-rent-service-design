import { createContext, useState, useContext } from "react";

interface Types {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  indexOfFirstPost: number,
  indexOfLastPost: number,
  postsPerPage: number
}

const PaginationContext = createContext<Types>({
  currentPage: 1,
  setCurrentPage: () => {},
  indexOfFirstPost: 0,
  indexOfLastPost: 0,
  postsPerPage: 6
});

export const PaginationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, _setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const setCurrentPage = (value: number) => {
    _setCurrentPage(value);
  };

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, indexOfLastPost, indexOfFirstPost, postsPerPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () =>
  useContext(PaginationContext);
