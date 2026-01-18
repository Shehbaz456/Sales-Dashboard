const outcomeColor = {
  Answered: "bg-green-100 text-green-700",
  "No Answer": "bg-gray-100 text-gray-700",
  Busy: "bg-yellow-100 text-yellow-700",
  Voicemail: "bg-purple-100 text-purple-700",
};

const CallLogCard = ({ log }) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{log.leadName}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${outcomeColor[log.outcome]}`}
        >
          {log.outcome}
        </span>
      </div>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Date:</span> {log.date}
        </p>
        <p>
          <span className="font-medium">Time:</span> {log.time}
        </p>
        <p>
          <span className="font-medium">Duration:</span> {log.duration}
        </p>
      </div>
    </div>
  );
};

export default CallLogCard;
