import { useState } from "react";
export default function IntelligentSearch() { const [searchQuery, setSearchQuery] = useState(""); const [documentType, setDocumentType] = useState("All"); const [dateRange, setDateRange] = useState("All");
const handleSearch = () => { if (!searchQuery.trim()) return;
console.log("Searching for:", searchQuery);
console.log("Document type:", documentType);
console.log("Date range:", dateRange);
};
return ( <div className="space-y-6"> {/* Page Heading */} <div> <h1 className="text-2xl font-bold text-gray-900"> Intelligent Search </h1>
    <p className="mt-2 text-sm text-gray-500">
      Search by filename, topic or ask a question in everyday language.
    </p>
  </div>

  {/* Search Box */}
  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <span className="text-xl text-purple-600">✦</span>

    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch();
      }}
      placeholder="Ask anything about your documents..."
      className="flex-1 bg-transparent text-sm outline-none"
    />

    <button
      onClick={handleSearch}
      className="rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
    >
      Search
    </button>
  </div>

  {/* Filters */}
  <div className="flex flex-wrap items-center gap-4">
    <span className="text-xs font-medium text-gray-500">
      FILTERS
    </span>

    <select
      value={documentType}
      onChange={(e) => setDocumentType(e.target.value)}
      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
    >
      <option>All</option>
      <option>PDF</option>
      <option>Word</option>
      <option>Excel</option>
      <option>PowerPoint</option>
    </select>

    <select
      value={dateRange}
      onChange={(e) => setDateRange(e.target.value)}
      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
    >
      <option>All</option>
      <option>Last 7 days</option>
      <option>Last 30 days</option>
      <option>Last 90 days</option>
    </select>
  </div>
</div>
); }