"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes. Steadwell coordinates only with bonded, insured vendors, and our teams are background-checked. We also maintain appropriate business coverage for coordination services.",
  },
  {
    question: "Do you work with my realtor/contractor/POA?",
    answer:
      "Yes. We routinely coordinate with realtors, contractors, property managers, and powers of attorney. We can join existing teams or build one from scratch.",
  },
  {
    question: "How fast can you start?",
    answer:
      "We typically respond within one business day and can deliver an initial action plan within 72 hours. Start dates depend on vendor availability and project scope.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Our coordination fee is based on a percentage of total vendor costs (usually 15%–25%), tied to project complexity, timeline, and risk.",
  },
  {
    question: "Do you serve my area?",
    answer:
      "We currently serve families in and around Austin, TX and Raleigh, NC. For projects outside these areas, we may still help remotely—contact us to discuss.",
  },
  {
    question: "What is included in your fee?",
    answer:
      "Planning, vendor sourcing, scheduling, supervision, weekly status updates, issue management, and final documentation (photos, receipts, donation letters).",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Moves and estates often run 3–6 weeks from plan to completion. Aging-in-place projects typically complete in 1–3 weeks of active work, depending on scope.",
  },
  {
    question: "What happens if there's an issue mid-project?",
    answer:
      "We remain your single point of accountability. We handle vendor issues, schedule shifts, and punch-list items, and keep you informed via weekly (or more frequent) updates.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
