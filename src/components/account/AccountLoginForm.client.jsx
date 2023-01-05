import {Link, useNavigate} from '@shopify/hydrogen/client';
import {useState} from 'react';

export function AccountLoginForm({shopName}) {
  const navigate = useNavigate();

  const [hasSubmitError, setHasSubmitError] = useState(false);
  const [showEmailField, setShowEmailField] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [failedCounts, setFailedCounts] = useState(0);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [isSignInProcessing, setIsSignInProcessing] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setEmailError(null);
    setHasSubmitError(false);
    setPasswordError(null);

    if (showEmailField) {
      checkEmail(event);
    } else {
      setIsSignInProcessing(true);
      checkPassword(event);
    }
  }

  function checkEmail(event) {
    if (event.currentTarget.email.validity.valid) {
      setShowEmailField(false);
    } else {
      setIsSignInProcessing(false);
      setEmailError('Please enter a valid email');
    }
  }

  async function checkPassword(event) {
    const validity = event.currentTarget.password.validity;
    if (validity.valid) {
      const response = await callLoginApi({
        email,
        password,
      });

      if (response.error) {
        setFailedCounts(failedCounts + 1);
        setIsSignInProcessing(false);
        setPasswordIncorrect(true);
        if (failedCounts == 2) resetForm();
      } else {
        navigate('/account/subscriptions');
      }
    } else {
      setPasswordError(
        validity.valueMissing
          ? 'Please enter a password'
          : 'Passwords must be at least 6 characters',
      );
    }
  }

  function resetForm() {
    setShowEmailField(true);
    setEmail('');
    setEmailError(null);
    setPassword('');
    setPasswordError(null);
    setFailedCounts(0);
    setHasSubmitError(true);
    setPasswordIncorrect(false);
  }

  return (
    <div className="flex justify-center my-24 px-4">
      <div className="max-w-md w-full">
        <div className="flex items-end justify-end">
          <div className="w-full">
            <h2
              className="font-bold font-heading text-3xl mb-2 mb-8 uppercase"
              style={{marginTop: '20px'}}
            >
              Login To Your Account
            </h2>
          </div>
        </div>
        <form noValidate className="pt-6 pb-8 mt-4 mb-4" onSubmit={onSubmit}>
          {passwordIncorrect && (
            <div className="flex items-center justify-center mb-6 bg-zinc-500">
              <p className="m-4 text-s text-contrast">
                You entered password incorrectly {`(${failedCounts})`}. please
                type correct one.
              </p>
            </div>
          )}
          {hasSubmitError && (
            <div className="flex items-center justify-center mb-6 bg-zinc-500">
              <p className="m-4 text-s text-contrast">
                Sorry we did not recognize either your email or password. Please
                try to sign in again or create a new account.
              </p>
            </div>
          )}
          {showEmailField && (
            <EmailField
              shopName={shopName}
              email={email}
              setEmail={setEmail}
              emailError={emailError}
            />
          )}
          {!showEmailField && (
            <ValidEmail email={email} resetForm={resetForm} />
          )}
          {!showEmailField && (
            <PasswordField
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
              isSignInProcessing={isSignInProcessing}
            />
          )}
          {/* <button
            type="button"
            className="block py-2 text-lg text-center mt-8 font-bold w-full"
            href="#"
            style={{
              backgroundColor: '#4285F4',
              color: '#FFFFFF',
              marginBottom: '15px',
            }}
          >
            Sign in with Google
          </button>
          <button
            type="button"
            className="block py-2 text-lg text-center  font-bold w-full"
            style={{
              backgroundColor: '#4267B2',
              color: '#FFFFFF',
              marginBottom: '15px',
            }}
          >
            Sign in with Facebook
          </button>
          <button
            type="button"
            className="block py-2 text-lg text-center  font-bold w-full "
            style={{
              backgroundColor: '#35465C',
              color: '#FFFFFF',
              marginBottom: '15px',
            }}
          >
            Sign in with Amazon
          </button> */}
          <div className="mb-10">
            <p className="text-sm py-4">
              Don&apos;t have an account?{' '}
              <span
                className="font-bold underline"
                style={{color: '#DB9707', marginTop: '20px'}}
              >
                <Link to={`/account/register`}>Register</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function callLoginApi({email, password}) {
  try {
    const res = await fetch(`/account/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    if (res.ok) {
      localStorage.setItem('isLoggedin', true);
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

function EmailField({email, setEmail, emailError, shopName}) {
  return (
    <>
      <div className="mb-3">
        <input
          className={`w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs`}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {!emailError ? (
          ''
        ) : (
          <p className={`text-red-500 text-xs`}>{emailError} &nbsp;</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="block py-2 text-lg text-center uppercase font-bold w-full "
          style={{
            backgroundColor: '#DB9707',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}
          type="submit"
        >
          Next
        </button>
      </div>
    </>
  );
}

function ValidEmail({email, resetForm}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p>{email}</p>
        <input
          className="hidden"
          type="text"
          autoComplete="username"
          value={email}
          readOnly
        ></input>
      </div>
      <div>
        <button
          className="inline-block align-baseline text-sm underline"
          type="button"
          onClick={resetForm}
        >
          Change email
        </button>
      </div>
    </div>
  );
}

function PasswordField({
  password,
  setPassword,
  passwordError,
  isSignInProcessing,
}) {
  return (
    <>
      <div className="mb-3">
        <input
          className={`w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs`}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          minLength={6}
          required
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {!passwordError ? (
          ''
        ) : (
          <p className={`text-red-500 text-xs`}> {passwordError} &nbsp;</p>
        )}
      </div>
      <div className="flex items-center  justify-between">
        <button
          className="block py-2 text-lg text-center  uppercase font-bold w-full flex justify-center"
          style={{
            backgroundColor: '#DB9707',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}
          type="submit"
        >
          {isSignInProcessing ? (
            <>
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#DB9707]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </>
          ) : (
            <>Sign in</>
          )}
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1"></div>
        <p className="text-sm" style={{marginBottom: '20px'}}>
          <span className="font-bold underline" style={{color: '#DB9707'}}>
            <Link to={`/account/recover`}>Forgot Password? </Link>
          </span>
        </p>
      </div>
    </>
  );
}
