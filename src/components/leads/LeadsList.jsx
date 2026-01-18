import { useState } from "react";
import { useTenant } from "../../hooks/useTenant";
import { useAuth } from "../../hooks/useAuth";
import { LEAD_STATUS } from "../../utils/constants";
import LeadCard from "./LeadCard";
import LeadRow from "./LeadRow";
import LeadEditModal from "./LeadEditModal";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import EmptyState from "../common/EmptyState";

const LeadsList = () => {
  const { leads, updateLeadStatus } = useTenant();
  const { user } = useAuth();

  const [view, setView] = useState("card");
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const filteredLeads =
    selectedStatus === "ALL"
      ? leads
      : leads.filter((lead) => lead.status === selectedStatus);

  if (!leads.length) {
    return <EmptyState message="No leads found" />;
  }

  const handleSave = (updatedLead) => {
    updateLeadStatus(updatedLead.id, updatedLead.status);
    setSelectedLead(null);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full md:w-60 px-3 py-2 border rounded-lg text-sm"
          >
            <option value="ALL">All Status</option>
            {Object.values(LEAD_STATUS).map((status) => (
              <option key={status} value={status}>
                {status}
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
        {filteredLeads.length === 0 ? (
          <EmptyState message="No leads match this status" />
        ) : view === "card" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLeads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                role={user.role}
                onEdit={() => setSelectedLead(lead)}
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <LeadRow
                    key={lead.id}
                    lead={lead}
                    role={user.role}
                    onEdit={() => setSelectedLead(lead)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Modal (Admin only) */}
      {user.role === "Admin" && (
        <LeadEditModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default LeadsList;
