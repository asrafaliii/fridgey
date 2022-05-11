import React from 'react';

const Blog = () => {
    return (
        <section className='container mt-5'>
            <div>
                <h3>Difference between javascript and nodejs</h3>
                <p>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.

                In this article, we are going to discuss the difference between JavaScript and Node.js. But before discussing the differences, we will know about JavaScript and Node.js.</p>
            </div>
            <div>
                <h3>Differences between sql and nosql databases.</h3>
                <p>The five critical differences between SQL vs NoSQL are:<br />
                SQL databases are relational, NoSQL databases are non-relational.
                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
               SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.<br />

                Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.</p>
            </div>
        </section>
    );
};

export default Blog;