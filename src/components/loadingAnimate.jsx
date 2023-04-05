import React from 'react';
import '../style/styleLoad.css';

export const LoadingAnimate = () => {
    return (
        <div className="content_load">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
        </div>
    );
};
 