import { Link } from 'react-router-dom';

/**
 * Parses markdown-style links [Anchor Text](url) within a string
 * and returns an array of React components and plain text strings.
 * 
 * @param {string} text - The input text containing optional markdown-style links
 * @returns {React.ReactNode} Parsed React elements
 */
export function parseInlineLinks(text) {
  if (!text || typeof text !== 'string') return text;
  
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [_, anchorText, url] = match;
    const startIndex = match.index;

    if (startIndex > lastIndex) {
      parts.push(text.substring(lastIndex, startIndex));
    }

    const isExternal = url.startsWith('http://') || url.startsWith('https://');
    if (isExternal) {
      parts.push(
        <a key={startIndex} href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium decoration-primary/30 underline-offset-4">
          {anchorText}
        </a>
      );
    } else {
      parts.push(
        <Link key={startIndex} to={url} className="text-primary hover:underline font-medium decoration-primary/30 underline-offset-4">
          {anchorText}
        </Link>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
