import { LEAD_STATUS } from "../../utils/constants";

const statusColor = {
  [LEAD_STATUS.NEW]: "bg-blue-100 text-blue-700",
  [LEAD_STATUS.CONTACTED]: "bg-yellow-100 text-yellow-700",
  [LEAD_STATUS.QUALIFIED]: "bg-green-100 text-green-700",
  [LEAD_STATUS.CONVERTED]: "bg-purple-100 text-purple-700",
  [LEAD_STATUS.LOST]: "bg-red-100 text-red-700",
};

const LeadCard = ({ lead, role, onEdit }) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{lead.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColor[lead.status]}`}>
          {lead.status}
        </span>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <p>
          <span className="font-medium">Phone:</span> {lead.phone}
        </p>
      </div>

      {role === "Admin" && (
        <button
          onClick={onEdit}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          Edit Status
        </button>
      )}
    </div>
  );
};

export default LeadCard;




