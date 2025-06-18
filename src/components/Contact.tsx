import { Rocket, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:mahir.patel@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Let's Connect!</h2>
            <Rocket className="h-6 w-6 text-blue-400 ml-2" />
          </div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">Ready to build something impactful together? Let’s connect and explore what we can create. Reach out anytime—I'm always open to new ideas and meaningful collaboration.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-blue-300 font-medium mb-2">Name</label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-slate-700/50 border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-blue-300 font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-slate-700/50 border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20" placeholder="your.email@galaxy.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-300 font-medium mb-2">Brief Summary</label>
                <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="bg-slate-700/50 border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20 resize-none" placeholder="Tell me about your project or opportunity..." />
              </div>
              
              <div className="text-center">
                <Button type="submit" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center mx-auto">
                  <Star className="h-5 w-5 mr-2" />
                  Connect!
                  <Star className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-blue-500/20 text-center">
              <p className="text-blue-200 mb-4">Socials</p>
              <div className="flex justify-center space-x-6 text-blue-300">
                <a href="eugenebertrand65@gmail.com" className="hover:text-blue-400 transition-colors">
                  📧 Email
                </a>
                <a href="https://www.linkedin.com/in/eugene-bertrand-50766722b/" className="hover:text-blue-400 transition-colors">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/EugeneBertrand" className="hover:text-blue-400 transition-colors">
                  🚀 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
