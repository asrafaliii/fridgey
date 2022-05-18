import React from 'react';

const Contact = () => {
    return (
        <div className='container mt-3'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <img className='mt-2 d-flex align-items-center' src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="card-body">
                            <h1>Corporate Office :</h1>
                            <p>Plot-1088, Block-I, Sabrina Sobhan Road<br />
                                P.O-Khilkhet, P.S-Vatara,<br />
                                Bashundhara R/A, Dhaka-1229.<br />
                                Telephone: 0088000000-555555<br />
                                Email: info@Fridgey.com.</p>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;