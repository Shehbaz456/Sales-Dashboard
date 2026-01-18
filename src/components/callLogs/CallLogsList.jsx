import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { useState } from "react";
import { useTenant } from "../../hooks/useTenant";
import { CALL_OUTCOMES } from "../../utils/constants";
import CallLogCard from "./CallLogCard";
import CallLogRow from "./CallLogRow";
import EmptyState from "../common/EmptyState";

const CallLogsList = () => {
  const { callLogs } = useTenant();

  const [view, setView] = useState("card");
  const [selectedOutcome, setSelectedOutcome] = useState("ALL");

  const filteredLogs =
    selectedOutcome === "ALL"
      ? callLogs
      : callLogs.filter((log) => log.outcome === selectedOutcome);

  if (callLogs.length === 0) {
    return <EmptyState message="No call logs available" icon="📞" />;
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Outcome Filter */}
        <select
          value={selectedOutcome}
          onChange={(e) => setSelectedOutcome(e.target.value)}
          className="w-full md:w-60 px-3 py-2 border rounded-lg text-sm"
        >
          <option value="ALL">All Outcomes</option>
          {Object.values(CALL_OUTCOMES).map((outcome) => (
            <option key={outcome} value={outcome}>
              {outcome}
            </option>
          ))}
        </select>

        {/* View Toggle */}
        <div className="flex bg-gray-200 rounded-lg p-1 gap-2">
          <button
            onClick={() => setView("card")}
            className={`p-2 rounded ${
              view === "card" ? "bg-white shadow" : ""
            }`}
          >
            <IoGridOutline className="text-xl" />
          </button>

          <button
            onClick={() => setView("table")}
            className={`p-2 rounded ${
              view === "table" ? "bg-white shadow" : ""
            }`}
          >
            <CiGrid2H className="text-xl" />
          </button>
        </div>
      </div>

      {/* Content */}
      {filteredLogs.length === 0 ? (
        <EmptyState message="No call logs match this outcome" icon="📭" />
      ) : view === "card" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLogs.map((log) => (
            <CallLogCard key={log.id} log={log} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Lead</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-left">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <CallLogRow key={log.id} log={log} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CallLogsList;
