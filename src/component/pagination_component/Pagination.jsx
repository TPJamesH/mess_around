import usePagination from "./hook/usePagination"
import PaginationControls from "./child_component/paginationControl";
import showByPage from "./api/showByPage";
const Pagination = ({setItems,pageSize}) => {
    const {currentPage,nextPage,prevPage,setPage, totalItems} = usePagination({
        fetchData: showByPage,
        pageSize,setItems});
    
    return (
        <PaginationControls
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize ={pageSize}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
            />
    )
}

export default Pagination