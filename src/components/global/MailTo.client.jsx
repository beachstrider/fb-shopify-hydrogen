import React from "react";
import {Link, useUrl} from '@shopify/hydrogen';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            className="font-medium text-white"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;