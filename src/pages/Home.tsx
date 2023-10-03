import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Item, Pagination, SearchFilter } from "../components";
import { allCars } from "../utils/allCars";
import { useFilterAndSearchContext } from "../context/FilterAndSearchContext";
import { usePaginationContext } from "../context/paginationContext";

const Home = () => {
  const { setCurrentPage, indexOfFirstPost, indexOfLastPost } = usePaginationContext()
  const { brand, search } = useFilterAndSearchContext()
  const { page } = useParams()

  useEffect(() => {
    page && setCurrentPage(parseInt(page!))
  }, [page])

  const currentPosts = allCars.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-5 px-[150px] w-full bg-slate-100 min-h-[50vh] pb-10">
        <SearchFilter />
        <div
          className="pb-10 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 
          w-full gap-8 pt-14"
        >
          {/* <div className="pb-10 pt-5 flex justify-between flex-wrap gap-y-4"> */}
          {brand && allCars.filter((item) => item.brand === brand).map((item, i) => (
            <Item {...item} key={i} />
          ))}
          {search && allCars.filter((item) => item?.name.toLowerCase().includes(search.toLowerCase())).map((item, i) => (
            <Item {...item} key={i} />
          ))}

          {!brand && !search && currentPosts.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
        <Pagination
          totalCars={allCars.length}
        />
      </div>
    </>
  );
};

export default Home;
