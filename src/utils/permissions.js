import { ROLES } from './constants';

export const canEditLead = (role) => {
  return role === ROLES.ADMIN;
};

export const canAccessSettings = (role) => {
  return role === ROLES.ADMIN;
};

export const canViewLeads = (role) => {
  return [ROLES.ADMIN, ROLES.AGENT].includes(role);
};

export const canViewCallLogs = (role) => {
  return [ROLES.ADMIN, ROLES.AGENT].includes(role);
};
