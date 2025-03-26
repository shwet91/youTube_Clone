import React from 'react'
import { simpleFetch } from '@/backend/simpleFetch'
import api from '@/backend/api'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {  login } from '@/store/authSlice'

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



function LoginForm() {


    const formSchema = z.object({
      email: z.string().min(3).max(50),
        password: z.string().min().max(16),
      })
      
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
          email: "",
           password: "",
        },
      })

      const dispatch = useDispatch()

      async function onSubmit(values) {
        try {
          const response = await simpleFetch({
            method: 'POST',
            data: values,
            url: api.loginUser
          });
      
          console.log('Login Response Full Object:', response);
          
          // Explicitly dispatch the entire response object
          dispatch(login({
            data : response.data.user,
            accessToken : response.data.accessToken,
            refreshToken : response.data.refreshToken
          }));

        } catch (error) {
          console.error('Login failed', error);
        }
      }

      return (
  
    
    <Form {...form}  >
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-7 sm:w-1/2  flex flex-wrap gap-8  border-2 w-4/5 ">




<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>email</FormLabel>
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
