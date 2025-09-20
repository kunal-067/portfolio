import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Phone,
  MessageSquare,
} from "lucide-react";
import {SOCIAL} from '@/lib/socials'

const Contacts = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 bg-gray-50 dark:bg-transparent rounded-lg">
            <h2 className="text-2xl font-bold">Let’s Work Together</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Reach out on any of these</p>
    
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <Instagram /> <span className="hidden sm:inline">Instagram</span>
              </a>
    
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <Linkedin /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
    
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <Github /> <span className="hidden sm:inline">GitHub</span>
              </a>
    
              <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <MessageSquare /> <span className="hidden sm:inline">WhatsApp</span>
              </a>
    
              <a href={SOCIAL.phone} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <Phone /> <span className="hidden sm:inline">Call</span>
              </a>
    
              <a href={SOCIAL.mail} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <Mail /> <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </section>
  )
}

export default Contacts