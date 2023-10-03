import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { usePaginationContext } from '../context/paginationContext'

type PaginationItemProps = {
    item: string | number,
    type?: string,
    totalLength?: number
}

const PaginationItem = ({ item, type, totalLength }: PaginationItemProps) => {
  const { setCurrentPage, currentPage } = usePaginationContext()
  const navigate = useNavigate()

  const handleControl = () => {
    if (type === 'forward'){
      if (currentPage === totalLength) { 
        setCurrentPage(totalLength)
        navigate(`/${currentPage}`)
        return
      }
      
      navigate(`/${currentPage + 1}`)
      setCurrentPage(currentPage + 1)
    } else if (type === 'backward') {
      if (currentPage === 1) { 
        setCurrentPage(1)
        navigate(`/${currentPage}`)
        return
      }
      
      navigate(`/${currentPage - 1}`)
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
    {type ? (
      <>
        <div 
              className="w-[30px] h-[30px] rounded-lg bg-slate-400 flex items-center justify-center text-gray-700 
              text-xs font-bold cursor-pointer"
              onClick={handleControl}
          >
            {item}
          </div>
      </>
    ) : (
      <>
        <Link to={`/${item}`}>
          <div 
              className="w-[30px] h-[30px] rounded-lg bg-slate-400 flex items-center justify-center text-gray-700 
              text-xs font-bold cursor-pointer"
          >
            {item}
          </div>
        </Link>
      </>
    )}
    </>
  )
}

export default PaginationItem
