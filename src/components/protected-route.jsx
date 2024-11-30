import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const ProtectedRoute = ({children}) => {
    const{isSignedIn,user,isLoaded}=useUser();
    const{pathname}=useLocation();

    if(isLoaded && !isSignedIn && isSignedIn!==undefined){
        return <Navigate to="/?sign-in=true"/>;
    }

    //check onboarding status
    if(user!==undefined && !user.unsafeMetadata?.role && pathname!=='/onboarding'){
        return(<Navigate to="/onboarding"/>)
    }

    return children; 
  
};

export default ProtectedRoute
