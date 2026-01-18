import { mockCallLogs, mockLeads } from "../data/mockData";
import { useAuth } from "../hooks/useAuth";
import TenantContext from "./TenantContext";

import { useEffect, useState } from "react";

function TenantProvider({ children }) {
  const { user } = useAuth();

  const [leads, setLeads] = useState([]);
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    if (!user?.tenant) {
      setLeads([]);
      setCallLogs([]);
      return;
    }
    setLeads(mockLeads[user.tenant] || []);
    setCallLogs(mockCallLogs[user.tenant] || []);
  }, [user]);

  const updateLeadStatus = (leadId, newStatus) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead,
      ),
    );
  };

  return (
    <TenantContext.Provider value={{ leads, callLogs, updateLeadStatus }}>
      {children}
    </TenantContext.Provider>
  );
}

export default TenantProvider;
