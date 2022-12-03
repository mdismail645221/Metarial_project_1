import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Theme/Navbar/Navbar';

const Main = () => {
    return (
        <Box>
            <Container>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Main;