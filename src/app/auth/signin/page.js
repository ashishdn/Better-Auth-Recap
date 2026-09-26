"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SigninPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/dashboard",
    });

    console.log({ data, error });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)] p-4 text-slate-100">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-7 shadow-[0_25px_80px_rgba(15,23,42,0.85)] backdrop-blur-xl ring-1 ring-indigo-500/20 sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-indigo-500/30">
              A
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Sign in to continue to your dashboard.
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="mb-2 text-sm font-medium text-slate-200">
                Email
              </Label>
              <Input
                name="email"
                placeholder="john@example.com"
                className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              <FieldError className="mt-1 text-xs text-rose-400" />
            </TextField>

            <TextField className="w-full " name="password">
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  className="w-full "
                  type={isVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                />
                <InputGroup.Suffix className="pe-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-indigo-500 focus:ring-indigo-500"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-indigo-300 transition hover:text-indigo-200"
              >
                Forgot password?
              </a>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-95"
              >
                <Check className="h-4 w-4" />
                Sign In
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-700/80"
              >
                Reset
              </Button>
            </div>

            <p className="mt-2 text-center text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <a
                href="/auth/signup"
                className="font-semibold text-indigo-300 hover:text-indigo-200"
              >
                Sign up
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
