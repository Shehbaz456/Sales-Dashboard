import React, { Children, useEffect,useState } from 'react'
import AuthContext from './AuthContext';
import { mockUsers } from '../data/mockData';

function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

    const login =(username,password)=>{
        console.log("from context",username,password);
        // login process
        const fountUser = mockUsers.find((u)=>u.username === username && u.password===password);
        if(!fountUser){
            return { success: false, error: 'Invalid credentials' };
        }
        const userwithoutPassword = {...fountUser};
        delete userwithoutPassword.password;
        setUser(userwithoutPassword);
        localStorage.setItem('user', JSON.stringify(userwithoutPassword));
        return { success: true };
    }

    const logout = ()=>{
        setUser(null);
         localStorage.removeItem('user');
    }

    const switchTenant = (newTenant) =>{
        const updatedUser = {...user,tenant:newTenant}
        setUser(updatedUser);
        console.log("new tenant",newTenant);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }

  return (
    <AuthContext.Provider value={{user,loading,login,logout,switchTenant}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
