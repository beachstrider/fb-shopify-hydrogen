import {useState} from 'react';
import {Image, useNavigate, Link} from '@shopify/hydrogen';
import {emailValidation} from '~/lib/utils';
import {getInputStyleClasses} from '../../lib/styleUtils';

export function AccountRecoverForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    setEmailError(null);
    setSubmitError(null);

    const newEmailError = emailValidation(event.currentTarget.email);

    if (newEmailError) {
      setEmailError(newEmailError);
      return;
    }

    await callAccountRecoverApi({
      email,
    });

    setEmail('');
    setSubmitSuccess(true);
  }

  return (
    <div className="flex justify-center my-24 px-4">
      <div className="max-w-md w-full">
        {submitSuccess ? (
          <>
            <h1 className="text-4xl">Request Sent.</h1>
            <p className="mt-4">
              If that email address is in our system, you will receive an email
              with instructions about how to reset your password in a few
              minutes.
            </p>
          </>
        ) : (
          <>
            <h2
              className="font-bold font-heading text-3xl mb-2 mb-8 uppercase"
              contentEditable="false"
              style={{marginTop: '20px'}}
            >
              Forgot Your Password?
            </h2>
            <p className="text-lg" contentEditable="false">
              We’ll send you an email to reset your password.
            </p>
          </>
        )}
        <form noValidate className="pt-6 pb-8 mt-4 mb-4" onSubmit={onSubmit}>
          {submitError && (
            <div className="flex items-center justify-center mb-6 bg-zinc-500">
              <p className="m-4 text-s text-contrast">{submitError}</p>
            </div>
          )}
          <div className="flex items-end justify-end">
            <div className="w-full">
              <br />
              <div className="mb-10">
                <div>
                  <div className="mb-6">
                    <input
                      className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email address"
                      aria-label="Email address"
                      autoFocus
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    {!emailError ? (
                      ''
                    ) : (
                      <p className={`text-red-500 text-xs`}>
                        {emailError} &nbsp;
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="block py-2 text-lg text-center uppercase font-bold w-full "
                  style={{
                    backgroundColor: '#DB9707',
                    color: '#FFFFFF',
                    marginBottom: '15px',
                  }}
                  type="submit"
                >
                  Send Email
                </button>

                <p className="text-sm">
                  Already have an account?{' '}
                  <span
                    className="font-bold underline"
                    style={{color: '#DB9707', marginTop: '20px'}}
                  >
                    <Link to={'/account/login'}>Log In</Link>
                  </span>
                </p>
                <p className="text-sm">
                  Don't have an account created?{' '}
                  <span
                    className="font-bold underline"
                    style={{color: '#DB9707', marginTop: '20px'}}
                  >
                    <Link to={'/account/register'}>Register here</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function callAccountRecoverApi({
  email,
  password,
  firstName,
  lastName,
}) {
  try {
    const res = await fetch(`/account/recover`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password, firstName, lastName}),
    });
    if (res.status === 200) {
      return {};
    } else {
      return res.json();
    }
  } catch (error) {
    return {
      error: error.toString(),
    };
  }
}
