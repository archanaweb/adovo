import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Pagination = ({ currentPage, setCurrentPage, fetchData, totalPages }) => {
   
    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchData(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <div className="flex items-center justify-center space-x-2 pagination p-2 pt-4">
        {currentPage > 2 && <>
        <button
          className="px-3 py-2 bg-[#ffe1744d] rounded disabled:opacity-50 text-[#FF8E0E]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

      <button
          className="px-3 py-2 bg-[#ffe1744d] rounded disabled:opacity-50 text-[#FF8E0E]"
          onClick={() => handlePageChange(1)}
        >1</button>

        <span className="text-white">...</span></>}
        <button
            className={currentPage === 1 ? `px-3 py-1 rounded bg-[#fea800] text-white` : `px-3 py-1 rounded bg-[#8c95a4]`}
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
          >
            {currentPage > 1 ? currentPage - 1 : currentPage}
          </button>
          <button
            className={currentPage === 1 ? `px-3 py-1 rounded bg-[#8c95a4]` :`px-3 py-1 rounded bg-[#fea800] text-white`}
            onClick={() => handlePageChange(currentPage < 2 ? currentPage +1 : currentPage)}
          >
            {currentPage < 2 ? currentPage + 1 : currentPage}
          </button>

         <button
            className={`px-3 py-1 rounded bg-[#8c95a4]`}
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
          >
            {currentPage === 1 ? 3 : currentPage + 1}
          </button>
       
        <span className="text-white">...</span>

         <button
          className="px-3 py-2 bg-[#ffe1744d] rounded disabled:opacity-50 text-[#FF8E0E]"
          onClick={() => handlePageChange(currentPage + 1)}
        >{totalPages}</button>

        <button
          className="px-3 py-2 bg-[#ffe1744d] rounded disabled:opacity-50 text-[#FF8E0E]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
    </div>
  );
};
export default Pagination;