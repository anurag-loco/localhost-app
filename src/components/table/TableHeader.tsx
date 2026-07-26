import { FunctionComponent } from 'react';

export type TableHeaderProps = {
  className?: string;
  title: string;
  subtitle?: string;
  totalCount: number;
  selectedCount: number;
  onSelectAll: (selected: boolean) => void;
  onSort: (column: string, direction: 'asc' | 'desc') => void;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
};

/**
 * Table header component with title, selection controls, and column sorting
 * Displays team member count and provides bulk selection functionality
 */
const TableHeader: FunctionComponent<TableHeaderProps> = ({
  className = "",
  title,
  subtitle,
  totalCount,
  selectedCount,
  onSelectAll,
  onSort,
  sortColumn,
  sortDirection
}) => {
  const isAllSelected = selectedCount === totalCount && totalCount > 0;
  const isIndeterminate = selectedCount > 0 && selectedCount < totalCount;

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAll(event.target.checked);
  };

  const handleColumnSort = (column: string) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(column, newDirection);
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return (
        <img 
          className="w-3 h-3 opacity-50" 
          src="/sort-arrow-down.svg" 
          alt="Sort" 
        />
      );
    }
    return (
      <img 
        className={`w-3 h-3 transition-transform duration-200 ${
          sortDirection === 'desc' ? 'rotate-180' : ''
        }`}
        src="/sort-arrow-down.svg" 
        alt={`Sorted ${sortDirection === 'asc' ? 'ascending' : 'descending'}`}
      />
    );
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${className}`}>
      {/* Header Section */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-gray-900">
                {title}
              </h1>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-50 border border-purple-200 text-purple-700">
                {totalCount} users
              </span>
            </div>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Actions Menu */}
          <div className="flex items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="More options"
            >
              <img className="w-5 h-5" src="/dots-vertical.svg" alt="More options" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Headers */}
      <div className="bg-gray-50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {/* Name Column with Checkbox */}
              <th className="px-6 py-3 text-left">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = isIndeterminate;
                    }}
                    onChange={handleSelectAllChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    aria-label="Select all team members"
                  />
                  <button
                    onClick={() => handleColumnSort('name')}
                    className="flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  >
                    Name
                    {getSortIcon('name')}
                  </button>
                </div>
              </th>

              {/* Status Column */}
              <th className="px-6 py-3 text-left">
                <button
                  onClick={() => handleColumnSort('status')}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  Status
                  {getSortIcon('status')}
                </button>
              </th>

              {/* Role Column */}
              <th className="px-6 py-3 text-left">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleColumnSort('role')}
                    className="flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  >
                    Role
                  </button>
                  <button
                    className="p-1 rounded hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Role information"
                  >
                    <img className="w-4 h-4" src="/help-circle.svg" alt="Help" />
                  </button>
                </div>
              </th>

              {/* Email Column */}
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Email address
                </span>
              </th>

              {/* Teams Column */}
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Teams
                </span>
              </th>

              {/* Actions Column */}
              <th className="px-6 py-3 text-left">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TableHeader;


