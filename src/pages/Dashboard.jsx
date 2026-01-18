import { useAuth } from "../hooks/useAuth";
import { useTenant } from "../hooks/useTenant";
import { LEAD_STATUS, CALL_OUTCOMES } from "../utils/constants";

import {
  FiUsers,
  FiPhoneCall,
  FiCheckCircle,
  FiUserPlus,
} from "react-icons/fi";

import KpiCard from "../components/dashboard/kpiCard.jsx";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import ProgressItem from "../components/dashboard/ProgressItem";

const Dashboard = () => {
  const { user } = useAuth();
  const { leads, callLogs } = useTenant();
  const totalLeads = leads.length;
  const totalCalls = callLogs.length;

  const leadStatusCount = Object.values(LEAD_STATUS).reduce((acc, status) => {
    acc[status] = leads.filter((lead) => lead.status === status).length;
    return acc;
  }, {});

  const callOutcomeCount = Object.values(CALL_OUTCOMES).reduce((acc, outcome) => {
    acc[outcome] = callLogs.filter((log) => log.outcome === outcome).length;
    return acc;
  }, {});

  return (
    <div className="space-y-8">
   
      <div className="rounded-2xl bg-linear-to-r from-gray-900 to-gray-700 text-white p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-300 mt-1">
          {user?.tenant} • {user?.role}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Leads"
          value={totalLeads}
          icon={<FiUsers />}
          accent="blue"
        />
        <KpiCard
          title="Total Calls"
          value={totalCalls}
          icon={<FiPhoneCall />}
          accent="indigo"
        />
        <KpiCard
          title="Answered Calls"
          value={callOutcomeCount[CALL_OUTCOMES.ANSWERED] || 0}
          icon={<FiCheckCircle />}
          accent="green"
        />
        <KpiCard
          title="New Leads"
          value={leadStatusCount[LEAD_STATUS.NEW] || 0}
          icon={<FiUserPlus />}
          accent="purple"
        />
      </div>

      {/* Analytics Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AnalyticsSection title="Leads by Status">
          {Object.entries(leadStatusCount).map(([status, count]) => (
            <ProgressItem
              key={status}
              label={status}
              value={count}
              total={totalLeads}
            />
          ))}
        </AnalyticsSection>

        <AnalyticsSection title="Call Outcomes">
          {Object.entries(callOutcomeCount).map(([outcome, count]) => (
            <ProgressItem
              key={outcome}
              label={outcome}
              value={count}
              total={totalCalls}
            />
          ))}
        </AnalyticsSection>
      </div>
    </div>
  );
};

export default Dashboard;
