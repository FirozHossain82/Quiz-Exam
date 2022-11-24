import React from "react";

const Blog = () => {
  return (
    <div className=" bg-green-100">
      <div className="py-16">
        <div className="card w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-rose-600">
              What is the purpose of react routers?
            </h2>
            <p className="text-gray-900">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.They allow your user to move between the
              components of your app while preserving user state, and can
              provide unique URLs for these components to make them more
              shareable
            </p>
          </div>
        </div>

        <div className="card w-9/12 mx-auto mb-10 bg-indigo-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-rose-600">
              How does context API works?
            </h2>
            <p className="text-gray-900">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux..
            </p>
          </div>
        </div>

        <div className="card w-9/12 mx-auto bg-indigo-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-rose-600">What is the UesRef?</h2>
            <p className="text-gray-900">
              TThe useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
