import React from "react";

// Button Component Props
export interface ButtonProps { 
    value: string;
    variant?: "fill" | "outline";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

// SVG Icon Component Props
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: "add" | "cancel" | "edit" | "search";
    variant?: "fill" | "outline";
    size?: "small" | "medium" | "large";
    color?: string;
};

// SVG Logo Component Props
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
    name: "apple" | "google";
    size?: "small" | "medium" | "large";
    color?: string;
};

// Text Input Component Props
export interface TextInputProps {
    value?: string;
    placeholder?: string;
    align?: "left" | "right";
    size?: "small" | "medium" | "large";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Number Input Component Props
export interface NumberInputProps {
    value?: number;
    min?: number;
    max?: number;
    placeholder?: string;
    size?: "small" | "medium" | "large";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Progress Component Props
export interface ProgressProps {
    text?: string;
    value?: number;
    size?: "small" | "medium" | "large";
};

// Option Component Props
export interface OptionProps {
    value: string;
    label?: string;
    selected?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// Single Select Component Props
export interface SingleSelectProps {
    options?: OptionProps[];
    value?: string;
    orientation?: "horizontal" | "vertical";
};

// Multi Select Component Props
export interface MultiSelectProps {
    options?: OptionProps[];
    value?: string[];
    orientation?: "horizontal" | "vertical";
};

// Action type
export interface Action {
    [name: string]: string;
}