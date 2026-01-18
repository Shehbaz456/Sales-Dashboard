import CallLogsList from "../components/callLogs/CallLogsList";
import { useAuth } from "../hooks/useAuth";

const CallLogs = () => {
   const { user } = useAuth();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Call Logs</h1>
        <p className="text-sm text-gray-500">
          Tenant: {user?.tenant}
        </p>
      </div>

      <CallLogsList />
    </div>
  );
};

export default CallLogs;
