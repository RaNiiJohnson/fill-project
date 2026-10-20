export type FormFieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "message", string>
>;

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: FormFieldErrors;
  values?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    newsletter?: boolean;
  };
  guideUrl?: string;
  preview?: boolean;
};

export const initialLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
};
