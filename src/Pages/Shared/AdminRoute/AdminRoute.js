import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectData } from '../../../dataSlice/dataSlice';

const AdminRoute = ({ children }) => {

    const data = useSelector(selectData);
    let location = useLocation();
    console.log(data.admin);
    if (data.adminLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    }
    if (!data?.user?.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    if (!data.admin) {
        return <Navigate to="/help" state={{ from: location }} />;
    }
    return (
        <>
            {children}
        </>
    );
};

export default AdminRoute;