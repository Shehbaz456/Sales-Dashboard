const outcomeColor = {
  Answered: "text-green-600",
  "No Answer": "text-gray-500",
  Busy: "text-yellow-600",
  Voicemail: "text-purple-600",
};

const CallLogRow = ({ log }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3 font-medium">{log.leadName}</td>
      <td className="px-4 py-3">{log.date}</td>
      <td className="px-4 py-3">{log.time}</td>
      <td className="px-4 py-3">{log.duration}</td>
      <td className={`px-4 py-3 font-medium ${outcomeColor[log.outcome]}`}>
        {log.outcome}
      </td>
    </tr>
  );
};

export default CallLogRow;
