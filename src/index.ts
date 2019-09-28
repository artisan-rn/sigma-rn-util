import * as React from 'react';
export const mergeStyle = (requiredStyle:React.CSSProperties, customStyle:React.CSSProperties, defaultStyle:React.CSSProperties) => {
    let resultStyle = [requiredStyle];
    if (customStyle) {
        if (Array.isArray(customStyle)) {
            resultStyle = resultStyle.concat(customStyle);
        } else {
            resultStyle.push(customStyle);
        }
    } else {
        resultStyle.push(defaultStyle);
    }
    return resultStyle;
};
