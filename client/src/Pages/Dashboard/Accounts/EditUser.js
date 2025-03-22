import React from 'react';

export default function EditUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="content-main">
      <div className="card mx-auto max-w-md">
        <div className="card-body p-6">
          <h4 className="text-xl font-semibold mb-4">Create an Account</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input className="form-control block w-full mt-1 border-gray-300 rounded-md shadow-sm" placeholder="Your email" type="text" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <input className="form-control block w-full mt-1 border-gray-300 rounded-md shadow-sm" value="+998" type="text" />
                </div>
                <div className="w-2/3">
                  <input className="form-control block w-full mt-1 border-gray-300 rounded-md shadow-sm" placeholder="Phone" type="text" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Create password</label>
              <input className="form-control block w-full mt-1 border-gray-300 rounded-md shadow-sm" placeholder="Password" type="password" />
            </div>
            <div className="mb-3">
              <p className="text-center text-sm text-gray-500">By signing up, you confirm that you’ve read and accepted our User Notice and Privacy Policy.</p>
            </div>
            <div className="mb-4">
              <button className="btn btn-primary w-full py-2 bg-blue-600 text-white rounded-md" type="submit">Login</button>
            </div>
            <p className="text-center text-sm text-gray-500 mb-4">or sign up with</p>
            <div className="flex gap-2 mb-4">
              <a className="w-1/2 btn btn-light font-sm py-2 bg-gray-100 text-gray-700 rounded-md flex justify-center items-center" href="#">
                <svg className="icon-svg" aria-hidden="true" style={{ verticalAlign: 'bottom', marginTop: '-4px' }} width="20" height="20" viewBox="0 0 20 20">
                  <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path>
                  <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"></path>
                  <path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"></path>
                  <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z" fill="#EA4335"></path>
                </svg> Google
              </a>
              <a className="w-1/2 btn btn-light font-sm py-2 bg-gray-100 text-gray-700 rounded-md flex justify-center items-center" href="#">
                <svg className="icon-svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                  <path d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z" fill="#4167B2"></path>
                </svg> Facebook
              </a>
            </div>
            <p className="text-center text-sm text-gray-500">Already have an account?<a href="page-account-login.html" className="text-blue-600"> Sign in now</a></p>
          </form>
        </div>
      </div>
    </section>
  );
}