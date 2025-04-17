import { useState } from "react";
import { useNavigate } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUploadModal } from "./ImageUploadModal";
import { Plus } from "lucide-react";
import { Avatar } from "@/assets";
import { traineeFormSchema } from "@/lib/schema";

type TrainerFormValues = z.infer<typeof traineeFormSchema>;

// const traineeFormSchema = formSchema.extend({
//   phoneNo: z.string().min(6, { message: "Phone number is required." }),
// });

const departments = [
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance" },
];

export default function TraineeSignUpForm() {
  const navigate = useNavigate();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TrainerFormValues>({
    resolver: zodResolver(traineeFormSchema),
    defaultValues: {
      name: "",
      phoneNo: "",
      email: "",
      password: "",
      department: "",
      profileImage: "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
        form.setValue("profileImage", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: TrainerFormValues) => {
    setIsSubmitting(true);
    try {
      navigate(`/trainer/dashboard`);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={Avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="bg-red-500 text-white rounded-full p-1 cursor-pointer">
              <Plus size={16} />
            </div>
          </div>
        </div>

        <ImageUploadModal
          isImageModalOpen={isImageModalOpen}
          setIsImageModalOpen={setIsImageModalOpen}
          form={form}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          handleImageUpload={handleImageUpload}
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="register-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="register-input"
                    placeholder="Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="register-input"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="register-input"
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="register-input">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.value} value={dept.value}>
                        {dept.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-8 bg-[#596D94] text-white h-14 font-semibold text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
    </>
  );
}
