import { Suspense, lazy } from "react";
import { IconProps } from '../types/props';

export const Icon = ({
        name,
        variant = "outline",
        size = "medium",
    }: IconProps) => {
        
        const SVGIcon = lazy(() => import(`../assets/${name}-${variant}.svg`));

        const iconSize = (
            size === "small" ? 16 :
            size === "medium" ? 24 :
            32
        );

        return (
            <Suspense fallback={<div style={{ width: iconSize, height: iconSize }} />}>
                <SVGIcon width={iconSize} height={iconSize} />
            </Suspense>
        );
};

    
