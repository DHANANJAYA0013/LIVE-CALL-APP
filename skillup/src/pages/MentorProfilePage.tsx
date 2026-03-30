import { useParams, Link } from "react-router-dom";
import { Star, Clock, Calendar, MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { mentors, reviews } from "@/data/mockData";

const MentorProfilePage = () => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === id);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="text-center py-20">
          <p className="text-muted-foreground">Mentor not found.</p>
          <Link to="/mentors" className="text-primary hover:underline mt-2 inline-block">Back to Mentors</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <Link to="/mentors" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Mentors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <img src={mentor.avatar} alt={mentor.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-foreground">{mentor.name}</h1>
                  <p className="text-muted-foreground">{mentor.title}</p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-xs text-muted-foreground">({mentor.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-3.5 h-3.5" /> {mentor.experience}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Skills Offered</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-0 px-3 py-1">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-3 pb-4 border-b border-border/50 last:border-0">
                    <img src={review.userAvatar} alt={review.userName} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{review.userName}</span>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6 lg:sticky lg:top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">₹{mentor.pricePerSession}</div>
                <div className="text-sm text-muted-foreground">per session</div>
              </div>
              <Button className="w-full gradient-primary text-primary-foreground border-0 mb-3 hover:opacity-90">
                Book Session
              </Button>
              <Link to={`/chat/${mentor.id}`} className="w-full block">
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </Link>

              <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sessions done</span>
                  <span className="font-medium text-foreground">{mentor.sessionsCompleted}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">{mentor.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium text-foreground">{mentor.category}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <h3 className="text-sm font-medium text-foreground mb-2">Availability</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.availability.map((day) => (
                    <Badge key={day} variant="outline" className="text-xs">{day}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfilePage;
