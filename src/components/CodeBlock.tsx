'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Copy, CopyCheck } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Supported languages for type safety
export enum CodeLanguage {
    JAVASCRIPT = 'javascript',
    TYPESCRIPT = 'typescript',
    BASH = 'bash',
    REDIS = 'redis',
    JSON = 'json',
    SQL = 'sql',
    PYTHON = 'python',
    CSS = 'css',
    HTML = 'html',
}

// Props interface with optional highlightLines and wrapLongLines
interface CodeBlockProps {
    children: string;
    //   language?: CodeLanguage;
    language: string;
    highlightLines?: (number | string)[]; // e.g., [1, "3-5"] for single lines or ranges
    wrapLongLines?: boolean;
}

const CodeBlockComp: React.FC<CodeBlockProps> = ({
    children: code,
    language,
    highlightLines = [],
    wrapLongLines = true,
}) => {
    const [copied, setCopied] = useState(false);
    const [isDark, setIsDark] = useState<boolean | null>(null); // null = not mounted yet

    // Detect system theme and listen for changes
    useEffect(() => {
        // Set initial theme
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);

        // Listen for theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

        mediaQuery.addEventListener('change', handleThemeChange);
        return () => mediaQuery.removeEventListener('change', handleThemeChange);
    }, []);

    // Copy to clipboard with error handling
    const copyToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code.trim());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy code:', error);
            alert('Failed to copy code to clipboard.');
        }
    }, [code]);

    // Parse highlightLines for single lines and ranges (e.g., "3-5" -> [3, 4, 5])
    const getHighlightedLines = () => {
        const lines: number[] = [];
        highlightLines.forEach((line) => {
            if (typeof line === 'number') {
                lines.push(line);
            } else if (typeof line === 'string' && line.includes('-')) {
                const [start, end] = line.split('-').map(Number);
                for (let i = start; i <= end; i++) {
                    lines.push(i);
                }
            }
        });
        return lines;
    };

    // Custom line highlighting style
    const customStyle = {
        margin: 0,
        padding: '1rem',
        fontSize: '0.85rem',
        background: 'transparent',
    };

    // Line highlighter for Prism
    const lineHighlighter = (lineNumber: number) => {
        const highlighted = getHighlightedLines().includes(lineNumber);
        return {
            style: highlighted
                ? { backgroundColor: isDark ? '#3b4a5a' : '#e2e8f0', display: 'block' }
                : { display: 'block' },
        };
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md mb-6 overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xs font-mono text-gray-600 dark:text-gray-300">
                    {language.toUpperCase()}
                </span>
                <div className="group relative">
                    <button
                        onClick={copyToClipboard}
                        onKeyDown={(e) => e.key === 'Enter' && copyToClipboard()}
                        aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
                        className="flex items-center text-xs px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors duration-200"
                    >
                        {copied ? (
                            <>
                                <CopyCheck size={14} className="mr-1 text-green-500" />
                                <span className="animate-fade-in">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={14} className="mr-1" />
                                Copy
                            </>
                        )}
                    </button>
                    <span className="absolute hidden group-hover:block -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2">
                        {copied ? 'Copied!' : 'Copy code'}
                    </span>
                </div>
            </div>

            {/* Code Display */}
            {isDark !== null && (
                <div aria-live="polite">
                    <SyntaxHighlighter
                        language={language}
                        style={isDark ? oneDark : oneLight}
                        customStyle={customStyle}
                        showLineNumbers
                        wrapLines={wrapLongLines}
                        lineProps={(lineNumber: number) => lineHighlighter(lineNumber)}
                    >
                        {code.trim()}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
};

export const CodeBlock = memo(CodeBlockComp);