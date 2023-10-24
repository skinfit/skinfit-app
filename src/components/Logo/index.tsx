import { LogoProps } from '@/types/props';
import React, { Suspense, lazy, useMemo } from "react";

const cache = new Map<string, React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>>();

export const Logo = ({
        name,
        size = "medium",
    }: LogoProps) => {

        let SVGIcon = cache.get(`${name}`);

        if (!SVGIcon) {
            SVGIcon = lazy(() => import(`./assets/${name}.svg`));
            cache.set(`${name}`, SVGIcon);
        }

        const iconSize = useMemo(() => (
            size === "small" ? 16 :
            size === "medium" ? 24 :
            32
        ), [size]);

        return (
            <Suspense fallback={<div style={{ width: iconSize, height: iconSize }} />}>
                <SVGIcon width={iconSize} height={iconSize} />
            </Suspense>
        );
};




