import { TENANTS, LEAD_STATUS, CALL_OUTCOMES } from '../utils/constants';

export const mockUsers = [
  {
    id: 1,
    username: 'admin_a',
    password: 'admin123',
    role: 'Admin',
    tenant: TENANTS.ORG_A,
    name: 'John Admin'
  },
  {
    id: 2,
    username: 'agent_a',
    password: 'agent123',
    role: 'Agent',
    tenant: TENANTS.ORG_A,
    name: 'Jane Agent'
  },
  {
    id: 3,
    username: 'admin_b',
    password: 'admin123',
    role: 'Admin',
    tenant: TENANTS.ORG_B,
    name: 'Bob Admin'
  },
  {
    id: 4,
    username: 'agent_b',
    password: 'agent123',
    role: 'Agent',
    tenant: TENANTS.ORG_B,
    name: 'Alice Agent'
  }
];

export const mockLeads = {
  [TENANTS.ORG_A]: [
    { id: 1, name: 'Michael Scott', phone: '+1-555-0101', status: LEAD_STATUS.NEW },
    { id: 2, name: 'Dwight Schrute', phone: '+1-555-0102', status: LEAD_STATUS.CONTACTED },
    { id: 3, name: 'Jim Halpert', phone: '+1-555-0103', status: LEAD_STATUS.QUALIFIED },
    { id: 4, name: 'Pam Beesly', phone: '+1-555-0104', status: LEAD_STATUS.CONVERTED },
    { id: 5, name: 'Ryan Howard', phone: '+1-555-0105', status: LEAD_STATUS.LOST },
  ],
  [TENANTS.ORG_B]: [
    { id: 6, name: 'Tony Stark', phone: '+1-555-0201', status: LEAD_STATUS.NEW },
    { id: 7, name: 'Steve Rogers', phone: '+1-555-0202', status: LEAD_STATUS.CONTACTED },
    { id: 8, name: 'Natasha Romanoff', phone: '+1-555-0203', status: LEAD_STATUS.QUALIFIED },
    { id: 9, name: 'Bruce Banner', phone: '+1-555-0204', status: LEAD_STATUS.CONVERTED },
    { id: 10, name: 'Thor Odinson', phone: '+1-555-0205', status: LEAD_STATUS.NEW },
  ]
};

export const mockCallLogs = {
  [TENANTS.ORG_A]: [
    { id: 1, leadName: 'Michael Scott', date: '2026-01-15', time: '10:30 AM', duration: '5:23', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 2, leadName: 'Dwight Schrute', date: '2026-01-15', time: '11:15 AM', duration: '3:45', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 3, leadName: 'Jim Halpert', date: '2026-01-14', time: '02:20 PM', duration: '0:00', outcome: CALL_OUTCOMES.NO_ANSWER },
    { id: 4, leadName: 'Pam Beesly', date: '2026-01-14', time: '03:45 PM', duration: '7:12', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 5, leadName: 'Ryan Howard', date: '2026-01-13', time: '09:00 AM', duration: '0:00', outcome: CALL_OUTCOMES.VOICEMAIL },
  ],
  [TENANTS.ORG_B]: [
    { id: 6, leadName: 'Tony Stark', date: '2026-01-15', time: '09:00 AM', duration: '12:34', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 7, leadName: 'Steve Rogers', date: '2026-01-15', time: '10:30 AM', duration: '0:00', outcome: CALL_OUTCOMES.BUSY },
    { id: 8, leadName: 'Natasha Romanoff', date: '2026-01-14', time: '01:15 PM', duration: '4:56', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 9, leadName: 'Bruce Banner', date: '2026-01-14', time: '04:00 PM', duration: '8:23', outcome: CALL_OUTCOMES.ANSWERED },
    { id: 10, leadName: 'Thor Odinson', date: '2026-01-13', time: '11:45 AM', duration: '0:00', outcome: CALL_OUTCOMES.NO_ANSWER },
  ]
};
