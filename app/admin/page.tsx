import Image from "next/image"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

async function setStatus(formData: FormData) {
  "use server"
  const value = String(formData.get("status") || "coming-soon")
  const cookieStore = await cookies()
  cookieStore.set("site-status", value, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect(value === "live" ? "/" : "/coming-soon")
}

export default async function AdminPage() {
  const current = (await cookies()).get("site-status")?.value ?? "coming-soon"
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
      <p className="text-slate-600 mt-2">
        Toggle site status between Coming Soon and Live. Cookie-based for demo purposes. For production, connect a KV/DB.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Site Status</CardTitle>
            <CardDescription>Current: {current}</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={setStatus} className="space-y-6">
              <RadioGroup defaultValue={current} name="status">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="coming-soon" id="coming" />
                  <Label htmlFor="coming">Coming Soon / Under Construction</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="live" id="live" />
                  <Label htmlFor="live">Live Site</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save Status</Button>
            </form>
            <Separator className="my-6" />
            <p className="text-sm text-slate-600">
              Tip: When deployed on Vercel with a properly configured domain, HTTPS certificates are handled automatically.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>Example HTTPS warning screenshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/images/cresph-screenshot.jpg"
              alt="CRES.PH HTTPS connection warning screenshot"
              width={800}
              height={450}
              className="rounded-lg border"
            />
            <p className="text-sm text-slate-600">
              Ensure DNS is pointed correctly and the domain is added to your Vercel project so SSL can be issued.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
