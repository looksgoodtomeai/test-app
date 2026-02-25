'use client'

import { useState } from 'react'
import styles from './pricing.module.css'

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    desc: 'For side projects',
    features: ['3 projects', '2 team members', 'Basic boards', 'Community support'],
    cta: 'Get Started',
    href: '/signup?plan=free',
  },
  {
    name: 'Pro',
    monthlyPrice: 12,
    annualPrice: 10,
    period: '/user/mo',
    desc: 'For growing teams',
    features: [
      'Unlimited projects',
      'Unlimited members',
      'Sprint analytics',
      'Priority support',
      'GitHub integration',
    ],
    cta: 'Start Free Trial',
    href: '/signup?plan=pro',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    desc: 'For large organizations',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'Audit logs',
      'Dedicated account manager',
      '99.9% SLA',
    ],
    cta: 'Contact Sales',
    href: '/signup?plan=enterprise',
  },
]

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for Enterprise customers.',
  },
  {
    q: 'Is there a free trial for Pro?',
    a: 'Yes. The Pro plan comes with a 14-day free trial. No credit card required to start.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'Your account will revert to the Free plan automatically. No charges will be made unless you explicitly upgrade.',
  },
]

function formatPrice(plan: typeof plans[number], annual: boolean) {
  if (plan.monthlyPrice === null) return 'Custom'
  const price = annual ? plan.annualPrice : plan.monthlyPrice
  return `$${price}`
}

function getPeriod(plan: typeof plans[number]) {
  if (plan.monthlyPrice === null) return ''
  if (plan.monthlyPrice === 0) return '/mo'
  return '/user/mo'
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className={styles.container}>
      <section aria-labelledby="pricing-heading">
        <h1 id="pricing-heading" className={styles.heading}>
          Simple, transparent pricing
        </h1>
        <p className={styles.subheading}>No hidden fees. Cancel anytime.</p>

        <div className={styles.toggleWrapper} role="group" aria-label="Billing period">
          <span
            className={`${styles.toggleLabel} ${!annual ? styles.toggleLabelActive : ''}`}
            id="monthly-label"
          >
            Monthly
          </span>
          <button
            className={styles.toggle}
            role="switch"
            aria-checked={annual}
            aria-labelledby="monthly-label annual-label"
            onClick={() => setAnnual(!annual)}
          >
            <span className={styles.toggleKnob} />
          </button>
          <span
            className={`${styles.toggleLabel} ${annual ? styles.toggleLabelActive : ''}`}
            id="annual-label"
          >
            Annual
          </span>
          {annual && <span className={styles.saveBadge}>Save 17%</span>}
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
            >
              {plan.featured && <span className={styles.popularBadge}>Most Popular</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>
                {formatPrice(plan, annual)}
                <span className={styles.period}>{getPeriod(plan)}</span>
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>&#10003; {f}</li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={
                  plan.featured
                    ? styles.ctaPrimary
                    : plan.monthlyPrice === null
                      ? styles.ctaOutlineFeatured
                      : styles.ctaOutline
                }
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className={styles.faqSection}>
        <h2 id="faq-heading" className={styles.faqHeading}>
          Frequently Asked Questions
        </h2>
        <div role="list">
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem} role="listitem">
              <button
                className={styles.faqButton}
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span
                  className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ''}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {openFaq === i && <p className={styles.faqAnswer}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
