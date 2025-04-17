import { useState } from "react";
import { Document, Page } from "react-pdf";

export const PdfViewer = ({ path }: { path: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="mx-auto">
      <div className="relative w-full h-full flex justify-center">
        <Document file={`/${path}`} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={1000}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="w-full h-full mb-4"
            />
          ))}
        </Document>
      </div>
    </div>
  );
};
