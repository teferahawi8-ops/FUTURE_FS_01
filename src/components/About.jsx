import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, Heart } from "lucide-react";

function About() {
return (
  <section id="about" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="aspect-square bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white w-full max-w-sm">
            <img
              src="hawi.jpg"
              alt="Hawi Tefera Deti"
              className="w-full h-full object-cover"
            />
          </div>

          {/* decorative shapes */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl -z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-lg text-slate-600 mb-8 leading-relaxed">
            <p>
              I am a passionate and motivated third-year Computer Science student at Hope Enterprise University College...
            </p>
            <p>
              I am especially interested in full-stack development, software design...
            </p>
            <p>
              My goal is to become a professional software developer...
            </p>
          </div>

          {/* info cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900">Education</h4>
              <p className="text-sm text-slate-600">Hope Enterprise University College</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Location</h4>
              <p className="text-sm text-slate-600">Ethiopia</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Interests</h4>
              <p className="text-sm text-slate-600">Full-stack, Software Design</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Status</h4>
              <p className="text-sm text-slate-600">Available for Internships</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
}
export default About;