const accentMap = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
};

const KpiCard = ({ title, value, icon, accent = "blue" }) => {
  return (
    <div className="bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-semibold text-gray-900 mt-1">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-xl ${accentMap[accent]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
