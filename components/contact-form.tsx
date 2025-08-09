"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      })
      if (!res.ok) throw new Error("Request failed")
      toast({ title: "Message sent", description: "We’ll get back to you shortly." })
      e.currentTarget.reset()
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later or email hello@cres.ph",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 border rounded-xl bg-white">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Juan Dela Cruz" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+63 9XX XXX XXXX" />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your Company" />
        </div>
      </div>
      <div>
        <Label>Service Interest</Label>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automation">Marketing Campaign Automation</SelectItem>
            <SelectItem value="training">Sales & Marketing Training</SelectItem>
            <SelectItem value="stack-review">Technology Stack Review</SelectItem>
            <SelectItem value="analytics">Data Analytics Setup</SelectItem>
            <SelectItem value="documentation">Title Documentation Processing</SelectItem>
            <SelectItem value="appraisal">Real Estate Appraisal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your goals..." rows={5} />
      </div>
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
      <p className="text-xs text-slate-500">
        By submitting, you agree to our{" "}
        <a className="underline" href="/terms">Terms</a> and{" "}
        <a className="underline" href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  )
}
