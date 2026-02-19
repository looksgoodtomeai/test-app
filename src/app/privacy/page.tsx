export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-2xl px-6 prose prose-gray">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500">Last updated: February 2026</p>

        <h2>What We Collect</h2>
        <p>When you use lgtm, we process the following data to provide our service:</p>
        <ul>
          <li><strong>PR diffs</strong> — analyzed in real-time, never stored permanently</li>
          <li><strong>Screenshots</strong> — captured during validation, deleted after 30 days</li>
          <li><strong>Account info</strong> — email, GitHub username (via Clerk authentication)</li>
          <li><strong>Usage metrics</strong> — run counts, timing data for billing and analytics</li>
        </ul>

        <h2>What We Don&apos;t Do</h2>
        <ul>
          <li>We never store your source code</li>
          <li>We never sell your data to third parties</li>
          <li>We never train AI models on your code</li>
          <li>We never access repos beyond what the GitHub App permissions allow</li>
        </ul>

        <h2>Data Retention</h2>
        <p>Run reports are retained for 90 days. Screenshots and artifacts are automatically purged after 30 days. You can request full data deletion at any time.</p>

        <h2>Contact</h2>
        <p>Questions? Email us at <a href="mailto:privacy@looksgoodtome.ai">privacy@looksgoodtome.ai</a>.</p>
      </div>
    </main>
  );
}
