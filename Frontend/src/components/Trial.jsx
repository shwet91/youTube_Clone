import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import api from '@/backend/api'
import { formFetch } from '@/backend/formFetch'
import { login } from '@/store/authSlice'

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
import { useDispatch } from 'react-redux'



function SignupForm() {

     const dispatch = useDispatch()  


    const formSchema = z.object({
      fullName: z.string().min(3).max(50),

         username: z.string().min(3).max(50),

         email: z.string().min(3).max(50),

        password: z.string().min().max(16),

      })
      
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "123",
          username: "123",
           password: "",
        },
      })


    async function onSubmit(values ) {
      console.log(form.getValues("coverImage"))
      const formData = new FormData()
      formData.append("username" , values.username)
      formData.append("fullName" , values.fullName)
      formData.append("email" , values.email)
      formData.append("password" , values.password)
      formData.append("avatar" , form.getValues("avatar"))
      formData.append("coverImage" , form.getValues("CoverImage"))


    const response  = await formFetch({
      url : api.registerUser,
      method : "POST",
      data : formData
    })

      dispatch(login({
        data : response.data
      }))

      console.log(response)

      }

      return (
  
    
    <Form {...form}  >
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-7 sm:w-1/2  flex flex-wrap gap-8  border-2 w-4/5 ">
      <FormField
        control={form.control}
        name="fullName"
        
        render={({ field }) => (
          <FormItem>
            <FormLabel>fullName</FormLabel>
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
  name="coverImage"
  render={({ field }) => (
    <FormItem>
      <FormLabel>coverImage</FormLabel>
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



{/* <FormField
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
      /> */}



      <Button className="sm:top-8 relative" type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default SignupForm