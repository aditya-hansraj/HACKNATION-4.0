import React, { useState } from "react";
import { CompanyData } from "../../types";

interface CompanyCardProps {
  company: CompanyData;
}

export const CompanyCard: React.FC<CompanyCardProps> = React.memo(
  ({ company }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div
        className={`flex flex-col md:flex-row items-start md:items-center justify-between my-2 p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-500/50 transition-colors duration-200 w-full`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <div>
              <h3 className="font-medium text-slate-800">{company.name}</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap space-x-4">
          {company.tags.map((tag, index) => (
            <span key={index} className="text-slate-500 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start w-full md:w-auto mt-4 md:mt-0 md:ml-4">
          <button
            onClick={toggleExpand}
            className="px-4 py-2 text-indigo-600 border border-slate-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-500 transition-colors duration-200 w-full md:w-auto "
          >
            {isExpanded ? "Hide Details" : "View Details"}
          </button>
          {/* // link to company details page */}
        </div>
      </div>
    );
  }
);
