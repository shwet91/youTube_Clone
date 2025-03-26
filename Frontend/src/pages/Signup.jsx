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



function SignupForm() {


    const formSchema = z.object({
         name: z.string().min(3).max(50),

         username: z.string().min(3).max(50),

         email: z.string().min(3).max(50),

        password: z.string().min(8).max(16),

      })
      
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "123",
          username: "123",
           password: "",
        },
      })

      function onSubmit(values ) {
        // Do something with the form values.
        console.log(values); // This is now validated by Zod
        console.log("worked");
        console.log(values.username)
        console.log(form.getValues("avatar"))
        console.log(form.getValues("CoverImage"))
      }

      return (
  
    
    <Form {...form}  >
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-7 sm:w-1/2  flex flex-wrap gap-8  border-2 w-4/5 ">
      <FormField
        control={form.control}
        name="name"
        
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" className=" " {...field} />
   
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
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
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






<FormField
  control={form.control}
  name="avatar"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Avatar</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept="image/*"
          onChange={(event) => {
            field.onChange(event.target.files?.[0]); // Capture the file
          }}
        />
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
        name="CoverImage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CoverImage</FormLabel>
            <FormControl>
              <Input type="file" placeholder="shadcn" 
              onChange={(event) => {
                field.onChange(event.target.files?.[0]); // Capture the file
              }} />
   
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

export default SignupForm