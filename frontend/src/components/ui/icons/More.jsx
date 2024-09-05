import React from 'react'

const More = ({ color = 'main-dark', size = 40 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 20H30"
                stroke={`var(--${color})`}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 12H30"
                stroke={`var(--${color})`}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 28L30 28"
                stroke={`var(--${color})`}
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default More