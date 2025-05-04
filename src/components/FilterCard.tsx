// src/components/FilterCard.jsx
const FilterCard = () => {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
  <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 flex items-center gap-4">
     <input
    type="text"
             placeholder="Search..."
      className="p-2 border border-gray-300 rounded-md"
           />
           <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
             Filter by Date
           </button>
           <button className="bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600">
             More Filter
           </button>
  </div>
  
  <div className="p-4">
  <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200">
            All
          </button>
          <button className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded hover:bg-green-200">
            Published
          </button>
          <button className="px-4 py-2 bg-yellow-100 text-yellow-700 font-medium rounded hover:bg-yellow-200">
            Drafts
          </button>
        </div>
  </div>
</div>
    //   <div className="bg-white p-6 rounded-lg shadow-md">
    //     {/* Top Filter Row */}
    //     <div className="flex flex-wrap gap-4 mb-4">
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="flex-[1_1_70%] p-2 border border-gray-300 rounded-md"
    //       />
    //       <button className="flex-[1_1_15%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
    //         Filter by Date
    //       </button>
    //       <button className="flex-[1_1_15%] bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">
    //         More Filter
    //       </button>
    //     </div>
  
    //     {/* Separator */}
    //     <hr className="mb-4 border-t border-gray-200" />
  
    //     {/* Card Body: Filter Tabs */}
    //     <div className="flex space-x-4">
    //       <button className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200">
    //         All
    //       </button>
    //       <button className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded hover:bg-green-200">
    //         Published
    //       </button>
    //       <button className="px-4 py-2 bg-yellow-100 text-yellow-700 font-medium rounded hover:bg-yellow-200">
    //         Drafts
    //       </button>
    //     </div>
    //   </div>
    );
  };
  
  export default FilterCard;
  