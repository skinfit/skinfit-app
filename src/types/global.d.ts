import React from "react";

// setting for @svgr/webpack
declare module "*.svg" {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}