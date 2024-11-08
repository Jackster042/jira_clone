"use client";
// Here are some helpful links for login validation approaches:

// 1. Using Formik with Yup validation:
// https://formik.org/docs/guides/validation#validationschema

// 2. Using React Final Form:
// https://final-form.org/docs/react-final-form/examples/field-level-validation

// 3. Using Joi validation library:
// https://github.com/hapijs/joi

// 4. Using custom validation with useReducer:
// https://github.com/WebDevSimplified/React-Simplified-Advanced-Projects/tree/main/34-35-custom-form-validation

// 5. Using Vuelidate (for Vue.js comparison):
// https://vuelidate-next.netlify.app/

// Current implementation uses Zod + React Hook Form which is a solid modern approach
// The above alternatives offer different tradeoffs in terms of bundle size, features and complexity

// ZOD
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// REACT HOOK FORM
import { useForm } from "react-hook-form";

// FORM UI
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { DottedSeparator } from "@/components/dotted-separator";

// UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// ICONS
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";
import { redirect } from "next/navigation";

//  FORM SCHEMA
// const formSchema = z.object({
//   email: z.string().trim().email(),
//   //  MIN REQ ON SIGN UP, NOT ON LOGIN
//   password: z.string().trim().min(1, "Required").max(256),
// });

export const SignInCard = () => {
  const { mutate } = useLogin();

  // CHECK
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        {/* <CardDescription>
            Sign in to your account to continue using Jira Clone
            </CardDescription> */}
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      // required
                      type="email"
                      placeholder="Enter email address"
                      // value={field.value}
                      // onChange={field.onChange}
                      // disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      // required
                      type="password"
                      placeholder="Enter password"
                      // value={field.value}
                      // onChange={field.onChange}
                      // disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Input
              required
              type="password"
              placeholder="Enter password"
              value={""}
              onChange={() => {}}
              disabled={false}
              min={8}
              max={256}
            /> */}
            <Button
              disabled={false}
              size="lg"
              className="w-full"
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
            >
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Log in with Google
        </Button>
      </CardContent>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Log in with GitHub
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="flex items-center justify-center p-7">
        <p>Don't have an account?</p>
        <Link href="/sign-up">
          <span className="text-blue-700">&nbsp;Sign up</span>
        </Link>
      </CardContent>
    </Card>
  );
};
