"use client";

import { ReactNode } from "react";


type Props = {
    name?: string;
    children: ReactNode;
}

export default function Button({ name, children }: Props){
    const handleClick = () => {
        alert("Hello "+ name);
    }

    return (
        <button onClick={handleClick} className="bg-orange-500 text-white">
            {children}
        </button>
    );
}