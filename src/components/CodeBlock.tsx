"use client";
import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

export const CodeBlock:React.FC<{children:string, language?:string}> = ({ children: code, language }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        console.log('copying code in', language);
        
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-100 rounded-lg p-4 mb-6 relative">
            <pre className="overflow-x-auto whitespace-pre-wrap">{code}</pre>
            <button
                onClick={copyToClipboard}
                className="absolute cursor-pointer top-2 right-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-2 py-1 rounded text-sm flex items-center"
            >
                {copied ? (
                    <>
                        <CopyCheck size={14} className="mr-1" /> Copied!
                    </>
                ) : (
                    <>
                        <Copy size={14} className="mr-1" /> Copy
                    </>
                )}
            </button>
        </div>
    );
};