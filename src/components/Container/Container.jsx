import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1200px] mx-auto px-4'>
            {children}
        </div>
    );
};

export default Container;