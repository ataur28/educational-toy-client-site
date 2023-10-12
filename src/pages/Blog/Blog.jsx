
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import useTitle from '../../hook/useTitle';

const Blog = () => {
    const [loader, setLoader] = useState(false);
    useTitle('Blog');

    const downloadPDF = () => {
        const capture = document.querySelector('.blog-page');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('blog.pdf');

        })
    }


    return (
        <div>
            <div >
                <div>
                    <h1 className='text-4xl font-bold text-center p-4' >Blog</h1>
                </div>
                <h2 className='text-3xl font-bold text-center p-4'>Question and Answer </h2>
                <div >
                    <h3 className='font-bold'>Question-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p>Answer:
                        An access token is a security credential that grants a client application permission to access protected resources on behalf of a user. It is typically short-lived and used for authentication and authorization purposes. A refresh token is a longer-lived token that is used to obtain new access tokens once the current one expires.

                        Access tokens are usually stored on the client-side, either in memory or in a secure storage mechanism such as browser cookies or local storage. Refresh tokens, on the other hand, should be securely stored, preferably in a server-side session store or a secure cookie with the HttpOnly flag set to prevent client-side access.

                        When an access token expires, the client can use the refresh token to request a new access token from the server without requiring the user to reauthenticate. This helps improve security by reducing the exposure of the access token and minimizing the risk of unauthorized access to protected resources.

                    </p>
                </div>
                <div >
                    <h3 className='font-bold'>Question-2: Compare SQL and NoSQL databases?</h3>
                    <li>Data Model: SQL databases have structured schemas, while NoSQL databases have flexible data models.</li>
                    <li>Scalability: SQL databases scale vertically, while NoSQL databases scale horizontally.</li>
                    <li>Query Language: SQL databases use SQL, while NoSQL databases have their query languages or APIs.</li>
                    <li>Flexibility: NoSQL databases are more flexible and agile in handling changing data structures.</li>
                    <li>Use Cases: SQL databases are suited for structured data, while NoSQL databases excel with unstructured or rapidly changing data.</li>
                </div>
                <div >
                    <h3 className='font-bold'>Question-3: What is express js? What is Nest JS?</h3>
                    <p>Answer:
                        <li>Express.js is a lightweight web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a minimalistic set of tools and features for handling HTTP requests, defining routes, and managing middleware functions. It is known for its flexibility, scalability, and extensive ecosystem of plugins.</li>
                        <li>Nest.js is a server-side framework for Node.js that utilizes TypeScript and draws inspiration from Angular. It offers a modular and extensible architecture, making it easy to build scalable and maintainable applications. It provides built-in support for routing, middleware, authentication, and database integration, promoting code reusability and following best practices. Nest.js is popular for building robust and enterprise-grade server-side applications.</li>
                        

                    </p>
                </div>
                <div >
                    <h3 className='font-bold'>Question-4: What is MongoDB aggregate and how does it work?</h3>
                    <p>Answer:
                    In MongoDB, the aggregate function is used for performing advanced data processing and aggregation operations on collections. It processes data through a sequence of stages defined in an aggregation pipeline. Each stage applies a specific operation or transformation to the data and passes the results to the next stage. This allows for complex data manipulations, filtering, grouping, sorting, and joining of data within a single query. Aggregations are useful for generating reports, analyzing data, and extracting valuable insights from MongoDB collections.</p>
                </div>
            </div>
            {/* <Button
                onClick={downloadPDF}
                disabled={!(loader === false)}>
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}

            </Button> */}
            <button onClick={downloadPDF}
                disabled={!(loader === false)}
                className="btn btn-primary m-4 ">
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}
            </button>

        </div>
    );
};

export default Blog;