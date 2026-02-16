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
      <div className="border border-white/10 bg-white/[0.02] px-6 py-10 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#E07B54]" />
        <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-3xl text-white">Thank You!</h3>
        <p className="mb-8 text-sm leading-relaxed text-white/75">
          Your message has been received. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex min-h-11 items-center justify-center border border-[#E07B54] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#E07B54] disabled:opacity-50"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses =
    'w-full bg-transparent pb-3 pt-2 text-base text-white placeholder:text-white/35 border-0 border-b border-white/35 outline-none transition-colors focus:border-[#E07B54]';

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData?.name ?? ''}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData?.email ?? ''}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData?.message ?? ''}
          onChange={handleChange}
          className={`${inputClasses} min-h-[88px] resize-none`}
          placeholder="Message"
        />
      </div>

      {error && (
        <p className="text-sm text-[#ff9f9f]">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-11 w-full items-center justify-center gap-2 bg-[#E07B54] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#C96845] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-4 w-4" /> Send</>
        )}
      </button>

      <p className="text-center text-xs text-white/45">
        Your information will be stored securely and used only to respond to your inquiry.
      </p>
    </form>
  );
}
