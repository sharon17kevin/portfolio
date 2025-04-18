import { Mail } from "lucide-react"


const Contact = () => {
  return (
    <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-black">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 ">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base md:text-xl">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to connect!
          </p>
          <a
            href="mailto:sharon14kevin@gmail.com"
            className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Send Message
          </a>
        </div>
      </section>
  )
}

export default Contact
