import { LEAD_STATUS } from "../../utils/constants";

const LeadEditModal = ({ lead, onClose, onSave }) => {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Lead</h2>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{lead.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{lead.phone}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Lead Status
            </label>
            <select
              value={lead.status}
              onChange={(e) =>
                onSave({ ...lead, status: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg"
            >
              {Object.values(LEAD_STATUS).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadEditModal;
 