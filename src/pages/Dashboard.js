import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import SideBar from '../components/side-bar/SideBar.js';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, []);
       
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <SideBar />
            </div>
        </div>
    )
}