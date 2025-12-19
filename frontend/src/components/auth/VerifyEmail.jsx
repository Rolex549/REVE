import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { authAPI } from '../../config/api';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [state, setState] = useState({ loading: true, message: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setState({ loading: false, message: 'No verification token provided.' });
      return;
    }

    const doVerify = async () => {
      try {
        const res = await authAPI.verifyEmail(token);
        setState({ loading: false, message: res.message || 'Email verified successfully. Redirecting to login...' });
        setTimeout(() => navigate('/login'), 2000);
      } catch (err) {
        setState({ loading: false, message: err.message || 'Verification failed. The token may be expired or invalid.' });
      }
    };

    doVerify();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-white rounded shadow text-center">
        {state.loading ? (
          <div className="text-lg font-medium">Verifying your email...</div>
        ) : (
          <>
            <div className="text-xl font-semibold mb-4">{state.message}</div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => navigate('/login')}
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
