'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData ?? {}),
      });

      if (!response?.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-[#2A9D8F] mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">Your message has been received. We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData?.name ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData?.email ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 outline-none transition-all"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData?.subject ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 outline-none transition-all bg-white"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="catering">Catering</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData?.message ?? ''}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07B54] focus:ring-2 focus:ring-[#E07B54]/20 outline-none transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information will be stored securely and used only to respond to your inquiry.
      </p>
    </form>
  );
}
