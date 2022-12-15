import React from 'react';

// export function LogoutButton({active, ref, ...props}) {
//   const logout = () => {
//     fetch('/account/logout', {method: 'POST'}).then(() => {
//       if (typeof props?.onClick === 'function') {
//         props.onClick();
//       }
      
//       localStorage.setItem('isLoggedin', false);
//       window.location.href = '/';
      
//     });
//   };

//   return (
//     <button ref={ref} className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-700 text-white' : 'text-white'}`} {...props} onClick={logout}>
//       Log out
//     </button>
//   );
// }

export const LogoutButton = React.forwardRef(({active, ...props}, ref) => {
  const logout = () => {
    fetch('/account/logout', {method: 'POST'}).then(() => {
      if (typeof props?.onClick === 'function') {
        props.onClick();
      }
      
      localStorage.setItem('isLoggedin', false);
      window.location.href = '/';
      
    });
  };

  return (
    <button ref={ref} className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-700 text-white' : 'text-white'}`} {...props} onClick={logout}>
      Log out
    </button>
  );
});
