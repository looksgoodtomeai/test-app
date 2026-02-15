export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Get in touch</h1>
      <p style={{ color: '#555', marginBottom: 32 }}>Have a question or want to learn more? Drop us a line.</p>
      <form style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Name</label>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Email</label>
          <input type="email" placeholder="you@company.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Message</label>
          <textarea rows={5} placeholder="How can we help?" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }} />
        </div>
        <button type="submit" style={{ background: '#6c63ff', color: '#fff', padding: '12px 28px', borderRadius: 8, border: 'none', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  )
}
