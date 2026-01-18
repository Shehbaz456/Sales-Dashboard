
# Multi-Tenant Sales Dashboard (Frontend)

A frontend-only **Multi-Tenant Sales Dashboard** built using **React**, **Context API**, and **Tailwind CSS**.  
This project simulates a SaaS platform where multiple organizations (tenants) use the same application with isolated data and role-based access.

> ⚠️ Note: This is a frontend assignment. No backend or API integration is implemented.

---

## 🎯 Objective

The purpose of this project is to demonstrate:

- Clean and scalable frontend architecture
- Multi-tenant data isolation
- Role-Based Access Control (RBAC)
- Context API–based state management
- UI/UX best practices
- Frontend optimization awareness

Feature completeness is **not** the primary goal.

---

## 🧰 Tech Stack

- **React (Vite)**
- **React Router DOM**
- **Context API**
- **Tailwind CSS v4.1**
- **React Icons**
- **LocalStorage** (for persistence)

---

## 🏢 Tenancy Model

### Supported Tenants
- Organization A
- Organization B

### Tenancy Rules
- A user belongs to **one tenant only**
- All data (Leads & Call Logs) is **tenant-specific**
- Switching tenant updates the entire UI instantly
- No cross-tenant data leakage

### Tenancy Flow

```
AuthContext (user.tenant)
        ↓
TenantProvider listens to tenant change
        ↓
Loads tenant-specific data
        ↓
Dashboard / Leads / Call Logs re-render
```

---

## 👤 Roles & Permissions

### Roles
- **Admin**
- **Agent**

### Permissions Matrix

| Feature              | Admin | Agent |
|---------------------|-------|-------|
Edit Lead Status      | ✅    | ❌    |
View Leads            | ✅    | ✅    |
View Call Logs        | ✅    | ✅    |
Access Settings       | ✅    | ❌    |

Permissions are centralized in:

```
utils/permissions.js
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── ProtectedRoute.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── Layout.jsx
│   │
│   ├── dashboard/
│   │   ├── KpiCard.jsx
│   │   ├── AnalyticsSection.jsx
│   │   └── ProgressItem.jsx
│   │
│   ├── leads/
│   │   ├── LeadsList.jsx
│   │   ├── LeadCard.jsx
│   │   ├── LeadRow.jsx
│   │   └── LeadEditModal.jsx
│   │
│   └── callLogs/
│       ├── CallLogsList.jsx
│       ├── CallLogCard.jsx
│       └── CallLogRow.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Leads.jsx
│   ├── CallLogs.jsx
│   └── Login.jsx
│
├── context/
│   ├── AuthContext.js
│   ├── AuthProvider.jsx
│   ├── TenantContext.js
│   └── TenantProvider.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useTenant.js
│   └── useRoleAccess.js
│
├── data/
│   └── mockData.js
│
├── utils/
│   ├── constants.js
│   └── permissions.js
│
└── App.jsx
```

---

## 🔐 Authentication (Mocked)

- Authentication uses mock users stored in `mockData.js`
- User session is persisted using **localStorage**
- On login, the following are stored:
  - `user.role`
  - `user.tenant`
- Session survives page refresh

---

## 🧠 State Management

### AuthContext
Handles:
- Login / Logout
- Tenant switching
- User identity & role

### TenantContext
Handles:
- Tenant-specific Leads
- Tenant-specific Call Logs
- Lead status updates

TenantContext automatically reacts to tenant change:

```js
useEffect(() => {
  loadTenantData(user.tenant);
}, [user]);
```

---

## 💾 LocalStorage Persistence

### Leads
- Stored **per tenant**
- Storage key format:

```
leads_<TENANT_NAME>
```

Example:
```
leads_Organization A
leads_Organization B
```

- Lead status changes persist after refresh

### Call Logs
- Read-only mock data
- Not persisted

---

## 📊 Dashboard

The Dashboard provides:
- KPI cards (Total Leads, Calls, Answered Calls, New Leads)
- Lead Status breakdown
- Call Outcome breakdown

All metrics are **derived from context state** (no duplicated data).

---

## 🔍 Filtering

### Leads
- Filter by Lead Status
- Works in both Card & Table views
- Implemented as derived state (no mutation)

### Call Logs
- Filter by Call Outcome
- Works in both Card & Table views

---

## ⚡ Frontend Optimization Notes

- No unnecessary global state
- Derived data instead of duplicated state
- Context separation by responsibility
- No prop drilling
- Components are reusable and memo-ready
- No forced reloads (`window.location.reload` avoided)

---

## 📱 Responsive Design

- Mobile-first layout
- Sidebar collapses on small screens
- Responsive grids for cards and tables
- Touch-friendly UI

---

## 🧪 Assumptions & Limitations

- No backend or API calls
- Authentication is mocked
- No real-time updates
- Charts not included (intentional)

---

## 📌 Author

**Md Shehbaz**  
  

---

## ✅ Conclusion

This project demonstrates strong frontend fundamentals, real-world SaaS tenancy handling, clean UI architecture, and scalable React design patterns suitable for production-level applications.
