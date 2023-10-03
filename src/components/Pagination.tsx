import { PaginationItem } from "."
import { usePaginationContext } from "../context/paginationContext"

type PaginationProps = {
  totalCars: number,
}

const Pagination = ({ totalCars }: PaginationProps) => {
  const { currentPage, postsPerPage } = usePaginationContext()
  const pageNumbers = []

  for(let i = 0; i < Math.ceil(totalCars / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-2 flex py-3 px-8 justify-between items-center rounded-xl shadow-xl">
      <div className="text-xs font-medium text-slate-700">{currentPage} from {pageNumbers.length}</div>
      <div className="flex gap-1">
        <PaginationItem item={"<"} type="backward"  />
        {pageNumbers.map((number, i) => (
          <PaginationItem item={number+1} key={i}  />
          ))}
        <PaginationItem item={">"} type="forward" totalLength={pageNumbers.length} />
      </div>
    </div>
  )
}

export default Pagination
