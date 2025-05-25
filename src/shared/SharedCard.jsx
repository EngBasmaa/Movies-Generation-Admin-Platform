import React from 'react'

export function SharedCard( { className, title, textColor, header, ...props } ) {
    return (
        <div className={`${className} mt-5 p-5`}>
            <h1 className={`mb-3 ${textColor}`}>{title}</h1>
            {header && <div className='alert alert-light'>
                {header}
            </div>}
            {props.children}
        </div>
    )
}
