'use client'

import { useState } from 'react'
import Section from '@/components/ui/section'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    company: z.string().min(2).max(100),
    email: z.string().email().min(2).max(50),
    message: z.string().min(2).max(2000),
})

export default function Component() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            const data = await response.json()

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Your message has been sent successfully!",
                })
                form.reset()
            } else {
                throw new Error(data.error || 'Failed to send message')
            }
        } catch (error) {
            console.error('Submission error:', error)
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to send your message. Please try again later.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Section
            subtitle="Contact us"
            description="Partner with us to bring your automation vision to life!"
        >
            <div className="mx-auto mt-16 max-w-4xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Acme Inc." {...field} />
                                        </FormControl>
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
                                            <Input placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col h-full">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="flex-grow">
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                placeholder="Your message here..." 
                                                className="h-56" 
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="md:col-span-2" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </Button>
                    </form>
                </Form>
            </div>
        </Section>
    )
}