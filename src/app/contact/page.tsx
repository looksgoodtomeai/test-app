export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Get in Touch</h1>
      <p style={{ color: '#555', marginBottom: 32 }}>Have a question or want a demo? Drop us a line.</p>
      <form style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, fontSize: '0.875rem' }}>Name</label>
          <input type="text" placeholder="Jane Doe" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box' as const }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, fontSize: '0.875rem' }}>Email</label>
          <input type="email" placeholder="jane@company.com" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box' as const }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4, fontWeight: 600, fontSize: '0.875rem' }}>Message</label>
          <textarea rows={5} placeholder="Tell us what you need..." style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box' as const, resize: 'vertical' as const }} />
        </div>
        <button type="submit" style={{ background: '#6c63ff', color: '#fff', padding: '12px 28px', borderRadius: 8, border: 'none', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', alignSelf: 'flex-start' }}>
          Send Message
        </button>
      </form>
    </div>
  )
}
