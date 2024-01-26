import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// 性別を表す型
type Gender = "male" | "female" | "other" | "";

export type SampleFormInput = {
  name: string;
  email: string;
  password: string;
  gender: Gender;
};

const sampleFormSchema = z
  .object({
    name: z.string().min(1).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    gender: z.union([
      z.literal(""),
      z.literal("male"),
      z.literal("female"),
      z.literal("other"),
    ]),
  })
  .required() satisfies z.ZodType<SampleFormInput>;

export const useSampleForm = () => {
  const formReturn = useForm<SampleFormInput>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },
    resolver: zodResolver(sampleFormSchema),
    mode: "onChange",
  });

  return formReturn;
};
