import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {login} = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
   let result = login(username,password);
    console.log( username, password );

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br  from-slate-50 via-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800">
            Sales Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Multi-Tenant Platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Username
            </label>
            <input
             
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm 
                         focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              autoComplete="current-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm 
                         focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-slate-800 py-2.5 text-sm font-medium 
                       text-white transition hover:bg-slate-900 focus:outline-none 
                       focus:ring-2 focus:ring-slate-300"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
          <p className="mb-2 font-medium">Demo Credentials</p>
          <ul className="space-y-1 text-xs">
            <li>• <strong>admin_a</strong> / admin123 (Org A Admin)</li>
            <li>• <strong>agent_a</strong> / agent123 (Org A Agent)</li>
            <li>• <strong>admin_b</strong> / admin123 (Org B Admin)</li>
            <li>• <strong>agent_b</strong> / agent123 (Org B Agent)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
