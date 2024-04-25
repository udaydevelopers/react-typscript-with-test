// global.d.ts
import React from 'react';
declare namespace JSX {
    interface IntrinsicElements {
        'h1': React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        // Add more elements as needed
    }
}
