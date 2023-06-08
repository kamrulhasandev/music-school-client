import React from 'react';
import useMyClass from '../../../hooks/useMyClass';

const MyClasses = () => {
    const [myClasses] = useMyClass();
    return (
        <div>
            <h1>My Classes</h1>
            {myClasses.length}
        </div>
    );
};

export default MyClasses;