import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import SmartClipboardPage from './pages/SmartClipboardPage';
import SettingsPage from './pages/SettingsPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard/smart-clipboard" replace /> : <LoginPage />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="smart-clipboard" replace />} />
        <Route path="smart-clipboard" element={<SmartClipboardPage />} />
        <Route path="order-reconciliation" element={<div className="flex-1 flex items-center justify-center p-8 bg-slate-50/50"><div className="text-center"><h2 className="text-xl font-bold text-slate-800">Order Reconciliation</h2><p className="text-slate-500 mt-2">Generate this page next using Stitch.</p></div></div>} />
        <Route path="reverse-logistics" element={<div className="flex-1 flex items-center justify-center p-8 bg-slate-50/50"><div className="text-center"><h2 className="text-xl font-bold text-slate-800">Reverse Logistics AI</h2><p className="text-slate-500 mt-2">Generate this page next using Stitch.</p></div></div>} />
        <Route path="warehouse-analytics" element={<div className="flex-1 flex items-center justify-center p-8 bg-slate-50/50"><div className="text-center"><h2 className="text-xl font-bold text-slate-800">Warehouse Analytics</h2><p className="text-slate-500 mt-2">Generate this page next using Stitch.</p></div></div>} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
