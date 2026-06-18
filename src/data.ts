import { Review, Provider, IssueCategory } from './types';

export const PROVIDERS: Provider[] = [
  'AT&T',
  'Spectrum',
  'Xfinity',
  'Comcast',
  'Dish TV',
  'DirecTV'
];

export const ISSUES: IssueCategory[] = [
  'Slow Internet',
  'Roaming & Signal Drops',
  'Inflated Monthly Bills',
  'TV Picture Quality',
  'Other Connection Issues'
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    fullName: 'Sarah Miller',
    city: 'Austin',
    state: 'TX',
    provider: 'AT&T',
    rating: 5,
    text: 'I kept getting massive roaming fees on my bills and network slowdowns in my neighborhood. Tech Revolut stepped in—their review found that my family plan was completely misconfigured. A consultant called me back within minutes and helped me get optimized. Simply elite service!',
    issueResolved: 'Roaming & Signal Drops'
  },
  {
    id: 'rev-2',
    fullName: 'David K.',
    city: 'Columbus',
    state: 'OH',
    provider: 'Spectrum',
    rating: 5,
    text: 'Paying for high-speed internet but getting dial-up speeds is infuriating. The specialist pointed out a legacy hardware mismatch that was bottlenecking my speeds, which Spectrum never mentioned. Now my connection is lightning fast, and my bill is finally reasonable.',
    issueResolved: 'Slow Internet'
  },
  {
    id: 'rev-3',
    fullName: 'Marcus L.',
    city: 'Atlanta',
    state: 'GA',
    provider: 'Xfinity',
    rating: 5,
    text: 'My Xfinity bill silently grew by $45 each month until it reached over $210. I used Tech Revolut to request a callback. They explained how Xfinity had rolled back my promo contract without warning. A quick consultation had Xfinity giving me back the savings immediately. Unbelievable.',
    issueResolved: 'Inflated Monthly Bills'
  },
  {
    id: 'rev-4',
    fullName: 'Robert Peterson',
    city: 'Denver',
    state: 'CO',
    provider: 'Comcast',
    rating: 5,
    text: 'We were constantly dealing with pixelated TV streams and dropouts during Sunday football games. The expert who called me back analyzed our line parameters and helped us successfully demand Comcast replace a bad neighborhood node. Picture is crystal clear now!',
    issueResolved: 'TV Picture Quality'
  },
  {
    id: 'rev-5',
    fullName: 'Elena Rodriguez',
    city: 'Phoenix',
    state: 'AZ',
    provider: 'Dish TV',
    rating: 5,
    text: 'Living in a suburban area made satellite our primary choice, but Dish TV rates were draining our finances. Tech Revolut helped us review the contract fine-print and optimize our satellite channel tiers so we would only pay for what we feed on. Saved a fortune!',
    issueResolved: 'Inflated Monthly Bills'
  },
  {
    id: 'rev-6',
    fullName: 'Amanda Williams',
    city: 'Charlotte',
    state: 'NC',
    provider: 'DirecTV',
    rating: 5,
    text: 'I had been a customer for 8 years, yet newcomer deals were half of what I was charged. The analyst diagnosed why our billing structure was so bloated and armed me with exact terms to secure our adjustments. Invaluable advice.',
    issueResolved: 'Inflated Monthly Bills'
  }
];

export const SERVICES = [
  {
    id: 'ser-1',
    icon: '🐌',
    title: 'Crawling Internet Speed',
    description: 'Frustrated with endless buffering or throttled speeds? We analyze your regional carrier routing, diagnose latency issues, and identify throttled bandwidth triggers.',
    features: ['Line routing bottleneck audits', 'Throttling trigger points', 'Packet loss diagnosis']
  },
  {
    id: 'ser-2',
    icon: '📡',
    title: 'Roaming & Signal Drops',
    description: 'Tired of dropped calls, weak signal bars, or unprompted roaming fees? We map coverage holes and inspect signal towers to verify true carrier network availability.',
    features: ['Signal zone map analysis', 'Roaming fee code checks', 'Tower availability verification']
  },
  {
    id: 'ser-3',
    icon: '💸',
    title: 'Inflated Monthly Bills',
    description: 'Are hidden fees, unexplained rate hikes, and double-dipping broadcast charges inflating your bill? We audited thousands of bills to reveal carrier pricing traps.',
    features: ['Hidden surcharge identification', 'Legacy promo recovery advice', 'Carrier pricing trap reviews']
  }
];

export const STEPS = [
  {
    id: 'step-1',
    num: '01',
    title: 'Consult via WhatsApp or Form',
    description: 'Submit your setup or bill details via our callback form, or message us directly on WhatsApp for an immediate expert consultation.'
  },
  {
    id: 'step-2',
    num: '02',
    title: 'Expert Plan Review',
    description: 'Our senior telecom optimization specialists review your regional rates, carrier routing guidelines, and hidden overcharges.'
  },
  {
    id: 'step-3',
    num: '03',
    title: 'You Save & Optimize',
    description: 'Our team calls you back to deploy optimization strategies, resolve stubborn connection issues, and restore your fair rates.'
  }
];
