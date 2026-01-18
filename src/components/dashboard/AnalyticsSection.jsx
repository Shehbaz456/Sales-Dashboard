const AnalyticsSection = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default AnalyticsSection;
