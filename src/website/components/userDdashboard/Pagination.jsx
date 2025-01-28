import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Pagination = ({ currentPage, setCurrentPage, fetchData }) => {
    const totalPages = 3;
    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchData(page);
      };

  return (
    <div className="flex items-center justify-center space-x-2 pagination p-2 pt-4">
        <button
          className="px-3 py-2 bg-[#ffe1744d] rounded disabled:opacity-50 text-[#FF8E0E]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              index + 1 === currentPage
                ? "bg-[#fea800] text-white"
                : "bg-[#8c95a4]"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

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