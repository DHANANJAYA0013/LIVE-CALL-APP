import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const profileSkills = ["React", "TypeScript", "System Design", "GraphQL"];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-1">Edit your profile, update your password, and manage teaching skills.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="shadow-card">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <Avatar className="h-28 w-28 shadow-card">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
                  alt="Dhananjaya"
                />
                <AvatarFallback>DH</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-foreground">Dhananjaya</h2>
                <p className="text-sm text-muted-foreground">Teacher · Bengaluru, IN</p>
                <p className="text-sm text-muted-foreground">dhananjaya@skillbridge.io</p>
              </div>
              <Button variant="outline" className="mt-2 w-full max-w-[180px]">Upload picture</Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-xl">Edit profile</CardTitle>
                  <CardDescription>Basic info, bio, and teaching role.</CardDescription>
                </div>
                <Button size="sm">Save changes</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName">Full name</Label>
                    <Input id="fullName" defaultValue="Dhananjaya" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="dhananjaya@skillbridge.io" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Bengaluru, IN" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Role</Label>
                    <Select defaultValue="teacher">
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Full-stack mentor helping learners master React, TypeScript, and system design through real-world projects."
                      className="bg-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">Skills (for teachers)</CardTitle>
                  <CardDescription>Showcase the topics you mentor in.</CardDescription>
                </div>
                <Button size="sm">Add skill</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Input placeholder="e.g. Next.js, Data Structures" className="bg-white" />
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Press Enter to add</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-[#f4f5ff] text-[#2f3c7e] border-transparent px-3 py-1"
                    >
                      {skill}
                      <span className="ml-1 text-muted-foreground">×</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">Create a session</CardTitle>
                  <CardDescription>Set up a new class slot for learners.</CardDescription>
                </div>
                <Button size="sm">Create session</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="sessionTitle">Session title</Label>
                    <Input id="sessionTitle" placeholder="e.g. Advanced TypeScript" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="instructorName">Instructor name</Label>
                    <Input id="instructorName" placeholder="Your name" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="instructorId">Instructor ID</Label>
                    <Input id="instructorId" placeholder="e.g. TCH-204" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="sessionDate">Date</Label>
                    <Input id="sessionDate" type="date" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="startTime">Start time</Label>
                    <Input id="startTime" type="time" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g. 60 minutes" className="bg-white" />
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" rows={3} placeholder="What will you cover?" className="bg-white" />
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="sessionLink">Session link / room ID</Label>
                    <Input id="sessionLink" placeholder="Paste meeting link or room code" className="bg-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">Change password</CardTitle>
                  <CardDescription>Secure your account with a new password.</CardDescription>
                </div>
                <Button size="sm">Update password</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="currentPassword">Current password</Label>
                    <Input id="currentPassword" type="password" defaultValue="********" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="newPassword">New password</Label>
                    <Input id="newPassword" type="password" defaultValue="********" className="bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="confirmPassword">Confirm new password</Label>
                    <Input id="confirmPassword" type="password" defaultValue="********" className="bg-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
