// components/SafeHtml.tsx
import DOMPurify from "dompurify";
import React from "react";

interface SafeHtmlProps {
    htmlString: string;
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ htmlString }) => {
    const createMarkup = (html: string) => {
        return { __html: DOMPurify.sanitize(html) };
    };

    return <div dangerouslySetInnerHTML={createMarkup(htmlString)} />;
};

export default SafeHtml;
