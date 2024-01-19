"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;
  const { fields, append } = useFieldArray({
    control,
    name: "useClientFields", // Adjust the field name as needed
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Render dynamic "use client" fields */}
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={form.control}
            name={`useClientFields[${index}].useClient`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Use Client</FormLabel>
                <FormControl>
                  <Input placeholder="Use Client" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Button to add a new "use client" field */}
        <Button
          type="button"
          onClick={() => append({ useClient: "" })}
        >
          Add Use Client
        </Button>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
