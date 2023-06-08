import React from 'react';
import useMyClass from '../../../hooks/useMyClass';

const MyClasses = () => {
    const [myClasses] = useMyClass();
    return (
        <div>
            <h1>My Classes</h1>
            {
                myClasses.map(item => <div key={item._id}>
                    <p>{item.status}</p>
                </div>)
            }
        </div>
    );
};

export default MyClasses;