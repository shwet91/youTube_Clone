import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



function LoginForm() {


    const formSchema = z.object({
         username: z.string().min(3).max(50),
        password: z.string().min(8).max(16),
      })
      
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
          username: "123",
           password: "",
        },
      })

      function onSubmit(values ) {
        // Do something with the form values.
        console.log(values); // This is now validated by Zod
        console.log("worked");

      }

      return (
  
    
    <Form {...form}  >
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-7 sm:w-1/2  flex flex-wrap gap-8  border-2 w-4/5 ">




<FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input className=""  placeholder="shadcn" {...field} />
   
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>


        )}
      />

<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="shadcn" {...field} />
   
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>


        )}
      />

      <Button className="sm:top-8 relative" type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default LoginForm