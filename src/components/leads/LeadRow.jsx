import { LEAD_STATUS } from "../../utils/constants";

const statusColor = {
  [LEAD_STATUS.NEW]: "text-blue-600",
  [LEAD_STATUS.CONTACTED]: "text-yellow-600",
  [LEAD_STATUS.QUALIFIED]: "text-green-600",
  [LEAD_STATUS.CONVERTED]: "text-purple-600",
  [LEAD_STATUS.LOST]: "text-red-600",
};

const LeadRow = ({ lead, role, onEdit }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{lead.name}</td>
      <td className="px-4 py-3">{lead.phone}</td>
      <td className={`px-4 py-3 font-medium ${statusColor[lead.status]}`}>
        {lead.status}
      </td>
      <td className="px-4 py-3">
        {role === "Admin" ? (
          <button
            onClick={onEdit}
            className="text-blue-600 hover:underline text-sm"
          >
            Edit
          </button>
        ) : (
          <span className="text-gray-400 text-sm">View only</span>
        )}
      </td>
    </tr>
  );
};

export default LeadRow;
