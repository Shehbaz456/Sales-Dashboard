import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import Layout from "./components/layout/Layout.jsx"
import AuthProvider from "./context/AuthProvider.jsx";
import TenantProvider from "./context/TenantProvider.jsx";
import CallLogs from "./pages/CallLogs.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Leads from "./pages/Leads.jsx";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <AuthProvider>
    <TenantProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/"  element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
              }>
            <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/call-logs" element={<CallLogs />} />
          <Route path="/leads" element={<Leads />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
    </TenantProvider>
    </AuthProvider>
    </>
  )
}

export default App
