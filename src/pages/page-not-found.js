import React, {useEffect} from 'react';

export default function PageNotFound() {

    useEffect(() => {
        document.title = '404 - Page Not Found';
    }, []);

    return (
        <div className="bg-gray-50 ">
            <div className="mx-auto py-10 max-w-screen-lg">
                <h2 className="text-2xl text-center">404 - Page Not Found</h2>

            </div>
        </div>
    )
}