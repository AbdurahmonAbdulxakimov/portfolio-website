// components/SafeHtml.tsx
import React from "react";

interface SafeHtmlProps {
    htmlString: string;
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ htmlString }) => {
    return <p dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default SafeHtml;
