import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import api from '@/backend/api'
import { simpleFetch } from '@/backend/simpleFetch'


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


 
const formSchema = z.object({
  oldPassword: z.string().min(2).max(50),
  newPassword: z.string().min(2).max(50),
})

function ChangePassword() {

    // 1. Define your form.
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        oldPassword: "",
        newPassword: ""
      },
    })

      // 2. Define a submit handler.
   async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const response = await simpleFetch({
      data : values,
      url : api.changeCurrentPassword,
      method : "POST"
    })

    console.log("this is the response :" , response)
  }




  return (
    <div>
 
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>

              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


       <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>

              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>

    </div>
  )
}

export default ChangePassword