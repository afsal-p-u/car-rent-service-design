import { BsSearch } from "react-icons/bs";
import { allCars } from "../utils/allCars";
import { useFilterAndSearchContext } from "../context/FilterAndSearchContext";

const SearchFilter = () => {
  const { setBrand, setSearch, brand } = useFilterAndSearchContext()
  const filtered: any [] = []

  allCars && allCars.map((item) => {
    if (filtered.includes(item.brand)) {
      return
    } else {
      filtered.push(item.brand)
    }
  })

  return (
    <div className="flex items-center bg-slate-100 py-3 px-5 rounded-xl shadow-xl  gap-2">
      <div className="bg-white  rounded-xl flex justify-between items-center pe-7">
        <input
          type="search"
          placeholder="Search..."
          className="outline-none border-none px-7 py-2 text-xs bg-transparent w-[350px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsSearch clasName="cursor pointer" />
      </div>
      <div className="">
        <select
          name="brand"
          onChange={(e) => setBrand(e.target.value)}
          className="text-xs px-2 py-2 bg-transparent border-none outline-none text-black font-semibold"
        >
          <option value={""} selected={brand === null ? true : false} className="font-medium">
            All brands
          </option>
          {filtered?.map((item) => (
            <option value={item} className="font-medium">
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
