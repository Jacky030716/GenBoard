import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Camera, X } from "lucide-react";

interface ImageUploadModalProps {
  isImageModalOpen: boolean;
  setIsImageModalOpen: (open: boolean) => void;
  form: any; // Replace with the actual type of your form
  previewImage: string | null;
  setPreviewImage: (image: string) => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploadModal = ({
  isImageModalOpen,
  setIsImageModalOpen,
  form,
  previewImage,
  setPreviewImage,
  handleImageUpload,
}: ImageUploadModalProps) => {
  return (
    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Upload profile picture</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          {previewImage && (
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                onClick={() => {
                  setPreviewImage("");
                  form.setValue("profileImage", "");
                }}
              >
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex flex-col items-center">
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="p-3 bg-blue-100 rounded-full">
                <Camera size={24} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">Upload Image</span>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="text-black bg-transparent"
            onClick={() => setIsImageModalOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => setIsImageModalOpen(false)}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
