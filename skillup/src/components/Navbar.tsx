import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Search, Bell, Menu, X, BookOpen, Video, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Find Mentors", path: "/mentors" },
  { label: "Skills", path: "/skills" },
  { label: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const isProfile = location.pathname.startsWith("/profile");
  const isNotifications = location.pathname.startsWith("/notifications");
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">SkillBridge</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/webrtc/splash">
              <Button 
                size="sm" 
                className="gradient-primary text-primary-foreground border-0 hover:opacity-90 flex items-center gap-2"
              >
                <Video className="w-4 h-4" />
                Start Live
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <div className="relative">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search skills, mentors..."
                className="pl-9 pr-4 py-2 text-sm rounded-lg bg-muted border-none outline-none focus:ring-2 focus:ring-primary/20 w-56 text-foreground placeholder:text-muted-foreground"
              /> */}
            </div>
            <Link
              to="/notifications"
              className={`relative p-2 rounded-lg transition-colors ${
                isNotifications
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
            </Link>
            <Link to="/profile" className="flex items-center" aria-label="Profile">
              <Avatar
                className={`h-10 w-10 border ${isProfile ? "border-primary ring-2 ring-primary/30" : "border-transparent"}`}
              >
                <AvatarImage
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80"
                  alt="Profile"
                />
                <AvatarFallback>DH</AvatarFallback>
              </Avatar>
            </Link>
            <Link to="/signin">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gradient-primary text-primary-foreground border-0 hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-full justify-center gap-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
          <Link to="/webrtc/splash" onClick={() => setMobileOpen(false)}>
            <Button 
              size="sm" 
              className="w-full gradient-primary text-primary-foreground border-0 hover:opacity-90 flex items-center justify-center gap-2 mb-2"
            >
              <Video className="w-4 h-4" />
              Start Live
            </Button>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/notifications"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium ${
              isNotifications ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
            }`}
          >
            <div className="relative p-2 rounded-lg bg-muted">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="flex flex-col">
              <span>Notifications</span>
              <span className="text-xs text-muted-foreground">Session updates</span>
            </div>
          </Link>
          <Link
            to="/profile"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium ${
              isProfile ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
            }`}
          >
            <Avatar className="h-9 w-9 border border-border">
              <AvatarImage
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80"
                alt="Profile"
              />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span>Profile</span>
              <span className="text-xs text-muted-foreground">View and update</span>
            </div>
          </Link>
          <div className="pt-2 flex gap-2">
            <Link to="/signin" className="flex-1"><Button variant="outline" className="w-full" size="sm">Sign In</Button></Link>
            <Link to="/signup" className="flex-1"><Button className="w-full gradient-primary text-primary-foreground border-0" size="sm">Get Started</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
