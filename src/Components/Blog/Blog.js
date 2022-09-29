import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-orange-200 mb-5 p-8'>
                <h2 className='text-2xl font-bold mb-4'>How Does React work?</h2>
                <p className='text-lg'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. Via React JSX very easy to write amazing codes. Then React creates a virtual domain and works so that any updates can be done very easily. React creates separate components for different tasks.</p>
            </div>
            <div className='bg-orange-200 mb-5 p-8'>
                <h2 className='text-2xl font-bold mb-4'>Difference between props and state?</h2>
                <p className='text-lg'><span className='font-bold'>Props:</span> The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.</p>
                <p className='text-lg'><span className='font-bold'>State:</span> The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components. State is both read and write.</p>
            </div>
            <div className='bg-orange-200 mb-5 p-8'>
                <h2 className='text-2xl font-bold mb-4'>Other than loading data, what else does UseEffect do?</h2>
                <p className='text-lg'>UseState does many things besides loading data. Like, Reading from local storage. Registering and deregistering event listeners. Called setTimeout(), setInterval() property. Running on state change: validating input field. Trigger animation on new array value..</p>
            </div>
        </div>
    );
};

export default Blog;