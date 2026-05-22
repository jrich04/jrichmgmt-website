import { Home, TrendingUp, ClipboardList, Search, BarChart3, Shield, Users, Handshake, Target, Mail, MapPin, Globe, CalendarDays } from 'lucide-react';

const email = 'admin@jrichmgmt.org';

const services = [
  ['Fix & Flip Consulting', 'End-to-end guidance on finding, analyzing, and executing profitable renovation opportunities.', Home],
  ['Investment Strategy', 'Strategic insight to help clients build strong real estate portfolios across Atlanta and Metro Atlanta.', TrendingUp],
  ['Renovation Planning', 'Detailed renovation planning focused on improving value, market appeal, and project efficiency.', ClipboardList],
  ['Acquisition Support', 'Property sourcing and deal analysis to help clients acquire the right property at the right price.', Search],
  ['Market Analysis', 'Research-driven guidance on local trends, pricing, and investment potential.', BarChart3]
];

const values = [
  ['Military Background', 'Active Duty Service Member bringing discipline, leadership, and integrity to every project.', Shield],
  ['Community Focused', 'Committed to strengthening communities through strategic property transformation.', Users],
  ['Client First', 'Guidance tailored to client goals, risk tolerance, and long-term growth.', Handshake],
  ['Results Driven', 'Focused on helping clients identify opportunities and make informed real estate decisions.', Target]
];

const projects = [
  ['East Point, GA', 'Renovation strategy and resale positioning'],
  ['Decatur, GA', 'Market analysis and acquisition review'],
  ['Atlanta, GA', 'Fix & flip planning and value-add guidance'],
  ['Lithonia, GA', 'Investment review and renovation scope planning']
];

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center border border-gold-500 bg-black font-serif text-4xl text-gold-500">JR</div>
      {!compact && (
        <div>
          <div className="font-serif text-2xl tracking-wide text-gold-500">J. RICH</div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/80">Management Group</div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-gold-700/30 bg-black/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" aria-label="J. Rich Management Group home"><Logo /></a>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
            <a className="text-gold-500" href="#home">Home</a>
            <a className="hover:text-gold-500" href="#about">About</a>
            <a className="hover:text-gold-500" href="#services">Services</a>
            <a className="hover:text-gold-500" href="#projects">Properties / Projects</a>
            <a className="hover:text-gold-500" href="#contact">Contact</a>
          </nav>
          <a href={`mailto:${email}`} className="hidden rounded-sm bg-gold-500 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-gold-600 md:inline-flex">Contact Us</a>
        </div>
      </header>

      <section id="home" className="section-anchor relative overflow-hidden bg-black text-white">
        <Image src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1800&q=80" alt="Atlanta skyline at night" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,.35),transparent_35%),linear-gradient(120deg,rgba(0,0,0,.98),rgba(0,0,0,.65))]" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-gold-500">Atlanta & Metro Atlanta</p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">Strategic <span className="text-gold-500">Real Estate</span> Consulting.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">Professional consulting for investors and property owners seeking smarter fix & flip opportunities, renovation strategy, and market guidance throughout Atlanta.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="rounded-sm bg-gold-500 px-7 py-4 text-center text-sm font-bold uppercase text-black transition hover:bg-gold-600">Our Services</a>
              <a href="#projects" className="rounded-sm border border-gold-500 px-7 py-4 text-center text-sm font-bold uppercase text-white transition hover:bg-gold-500 hover:text-black">View Projects</a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md border border-gold-500 bg-black p-10 shadow-2xl shadow-yellow-900/20">
            <div className="text-center font-serif text-[11rem] leading-none text-gold-500">R</div>
            <div className="text-center font-serif text-5xl tracking-wider text-gold-500">J RICH</div>
            <div className="mt-4 text-center text-sm uppercase tracking-[0.55em] text-yellow-200">Management Group</div>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gold-700">Who We Are</p>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">Real Estate Consulting Experts</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">J. Rich Management Group provides strategic real estate consulting for clients across Atlanta and Metro Atlanta. Led by an Active Duty Service Member with three years of experience, the company combines discipline, integrity, and community-focused leadership with practical fix & flip guidance.</p>
            <p className="mt-4 text-lg leading-8 text-zinc-700">Our mission is to help clients evaluate opportunities, reduce risk, plan renovations, and make informed property decisions that support long-term value and stronger communities.</p>
            <a href="#contact" className="mt-8 inline-flex rounded-sm bg-gold-500 px-7 py-4 text-sm font-bold uppercase text-black transition hover:bg-gold-600">Learn More About Us</a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Modern renovated home interior" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="services" className="section-anchor bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-gold-500">What We Do</p><h2 className="font-serif text-4xl font-bold md:text-5xl">Our Services</h2></div>
          <div className="grid gap-6 md:grid-cols-5">
            {services.map(([title, text, Icon]) => <div key={title} className="border border-gold-500/50 bg-zinc-950 p-6 text-center transition hover:-translate-y-1 hover:border-gold-500"><Icon className="mx-auto mb-5 h-11 w-11 text-gold-500" /><h3 className="mb-3 text-lg font-bold">{title}</h3><p className="text-sm leading-6 text-white/70">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center"><h2 className="font-serif text-4xl font-bold md:text-5xl">Why Choose J. Rich Management Group?</h2><div className="mx-auto mt-5 h-1 w-24 bg-gold-500" /></div>
          <div className="grid gap-8 md:grid-cols-4">
            {values.map(([title, text, Icon]) => <div key={title} className="text-center"><Icon className="mx-auto mb-5 h-12 w-12 text-gold-700" /><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="text-zinc-700">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section-anchor bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-gold-500">Portfolio</p><h2 className="font-serif text-4xl font-bold md:text-5xl">Featured Projects</h2></div>
          <div className="grid gap-6 md:grid-cols-4">
            {projects.map(([city, result], i) => <div key={city} className="overflow-hidden border border-gold-500/70 bg-zinc-950"><div className="relative h-44"><Image src={`https://images.unsplash.com/photo-${i === 0 ? '1570129477492-45c003edd2be' : i === 1 ? '1605276374104-dee2a0ed3cd6' : i === 2 ? '1568605114967-8130f3a36994' : '1598228723793-52759bba239c'}?auto=format&fit=crop&w=900&q=80`} alt={`${city} project placeholder`} fill className="object-cover opacity-80" /></div><div className="p-5"><h3 className="text-xl font-bold">{city}</h3><p className="mt-2 text-sm text-white/70">{result}</p><p className="mt-4 text-xs uppercase tracking-wider text-gold-500">Property listing integration ready</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-gold-500 px-6 py-10 text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"><div className="flex items-center gap-5"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-gold-500"><CalendarDays className="h-8 w-8" /></div><div><h2 className="font-serif text-3xl font-bold">Ready to Build Your Next Successful Project?</h2><p className="mt-1 text-black/80">Let’s turn opportunities into informed real estate decisions.</p></div></div><a href={`mailto:${email}?subject=Real%20Estate%20Consultation%20Request`} className="rounded-sm bg-black px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-zinc-900">Schedule a Consultation</a></div>
      </section>

      <section id="contact" className="section-anchor bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-gold-500">Contact Us</p><h2 className="font-serif text-4xl font-bold md:text-5xl">Start the Conversation</h2><p className="mt-6 text-lg leading-8 text-white/75">Contact J. Rich Management Group to discuss fix & flip consulting, acquisition support, renovation strategy, or real estate opportunities across Atlanta and Metro Atlanta.</p><div className="mt-8 space-y-4 text-white/85"><p className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold-500" /> {email}</p><p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold-500" /> Atlanta, GA</p><p className="flex items-center gap-3"><Globe className="h-5 w-5 text-gold-500" /> jrichmgmt.org</p></div></div>
          <form action={`https://formsubmit.co/${email}`} method="POST" className="rounded-sm border border-gold-500/50 bg-black p-8">
            <input type="hidden" name="_subject" value="New J. Rich Management Group Website Lead" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="mb-2 block text-sm font-bold uppercase text-gold-500">Name</label><input name="name" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-gold-500" required />
            <label className="mb-2 block text-sm font-bold uppercase text-gold-500">Email</label><input name="email" type="email" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-gold-500" required />
            <label className="mb-2 block text-sm font-bold uppercase text-gold-500">Message</label><textarea name="message" rows="5" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-gold-500" required />
            <button className="w-full rounded-sm bg-gold-500 px-7 py-4 text-sm font-bold uppercase text-black transition hover:bg-gold-600">Submit Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-black px-6 py-12 text-white"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div><Logo /></div><div><h3 className="mb-4 font-bold text-gold-500">Quick Links</h3><div className="space-y-2 text-white/75"><p><a href="#home">Home</a></p><p><a href="#about">About</a></p><p><a href="#services">Services</a></p><p><a href="#projects">Properties / Projects</a></p><p><a href="#contact">Contact</a></p></div></div><div><h3 className="mb-4 font-bold text-gold-500">Areas We Serve</h3><p className="text-white/75">Atlanta, GA</p><p className="text-white/75">Metro Atlanta</p><p className="text-white/75">Surrounding areas</p></div><div><h3 className="mb-4 font-bold text-gold-500">Connect</h3><p className="text-white/75">{email}</p><div className="mt-5 flex gap-4 text-gold-500"><Facebook className="h-5 w-5" /><Instagram className="h-5 w-5" /><Linkedin className="h-5 w-5" /></div></div></div><p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">© 2026 J. Rich Management Group LLC. All Rights Reserved.</p></footer>
    </main>
  );
}
