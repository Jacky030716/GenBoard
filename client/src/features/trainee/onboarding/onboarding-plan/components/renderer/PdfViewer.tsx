import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Document, Page } from "react-pdf";

export const PdfViewer = ({
  path,
  onContinue,
}: {
  path: string;
  onContinue?: () => void;
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="mx-auto w-full flex flex-col items-center gap-8">
      <div className="w-full flex justify-center">
        <Document file={`/${path}`} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={1000}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="w-full mb-4"
            />
          ))}
        </Document>
      </div>

      {/* Next Button */}
      <Button
        className="mx-auto w-[500px] rounded-full bg-[#5F6489] hover:bg-[#5F6489]/90 text-white text-lg font-semibold h-14"
        onClick={onContinue}
      >
        Continue
      </Button>
    </div>
  );
};
