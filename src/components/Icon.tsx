import React, { Suspense, lazy } from 'react';

export type IconProps = {
    label: "add" | "cancel" | "edit" | "search";
    type?: "outlined";
    size?: "small" | "medium" | "large";
}

export const Icon: React.FC<IconProps> = ({
        label,
        type = "outlined",
        size = "medium",
    }) => {

    const LazyIcon = lazy(() => import(`./asset/icons/${label}-${type}.svg`));

    const iconSize = size == "small" ? 16 : size == "medium" ? 24 : 32;
        
    return (
         <Suspense fallback={
            <div style={{ width: `${iconSize}px`, height: `${iconSize}px` }}></div>
        }>
            <LazyIcon width={iconSize} height={iconSize} />
        </Suspense>        
    );
}
