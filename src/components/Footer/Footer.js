import React from 'react';

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#e67e22",
        color: "#fff",
        padding: "15px 0"
    }

    return (
        <div className="mt-5" style={footerStyle}>
            <p className="text-center fs-6 fw-bold">Designed with loved &copy; Maruf Bin Solaiman!</p>
        </div>
    );
};

export default Footer;