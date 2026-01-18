import LeadsList from "../components/leads/LeadsList";
import { TENANTS } from "../utils/constants";

const Leads = () => {
  const activeTenant = TENANTS.ORG_A;
  const userRole = "Admin"; // or "Agent"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Leads</h1>
        <p className="text-sm text-gray-500">
          Tenant: {activeTenant} | Role: {userRole}
        </p>
      </div>

      <LeadsList tenant={activeTenant} role={userRole} />
    </div>
  );
};

export default Leads;
