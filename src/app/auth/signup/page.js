"use client"

import { Check } from "@gravity-ui/icons";
import {authClient} from "../../../lib/auth-client"
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    
    const { data, error } = await authClient.signUp.email({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    callbackURL: "/"
});
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)] p-4 text-slate-100">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-7 shadow-[0_25px_80px_rgba(15,23,42,0.85)] backdrop-blur-xl ring-1 ring-indigo-500/20 sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-indigo-500/30">
              A
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Create account</h1>
            <p className="mt-2 text-sm text-slate-300">
              Join and start managing your workspace today.
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              className="w-full"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className="mb-2 text-sm font-medium text-slate-200">Name</Label>
              <Input
                name="name"
                placeholder="John Doe"
                className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              <FieldError className="mt-1 text-xs text-rose-400" />
            </TextField>

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
              <Label className="mb-2 text-sm font-medium text-slate-200">Email</Label>
              <Input
                name="email"
                placeholder="john@example.com"
                className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              <FieldError className="mt-1 text-xs text-rose-400" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="mb-2 text-sm font-medium text-slate-200">Password</Label>
              <Input
                name="password"
                placeholder="Enter your password"
                className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              <Description className="mt-2 text-xs leading-5 text-slate-400">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="mt-1 text-xs text-rose-400" />
            </TextField>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-95"
              >
                <Check className="h-4 w-4" />
                Submit
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-700/80"
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
