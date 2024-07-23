// components/SafeHtml.tsx
import { sanitize } from "dompurify";
import React from "react";

interface SafeHtmlProps {
    htmlString: string;
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ htmlString }) => {
    const createMarkup = (html: string) => {
        // @ts-ignore
        return { __html: sanitize(html) };
    };

    return <div dangerouslySetInnerHTML={createMarkup(htmlString)} />;
};

export default SafeHtml;
