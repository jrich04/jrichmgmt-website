import {
  Home,
  TrendingUp,
  ClipboardList,
  Search,
  BarChart3,
  Shield,
  Users,
  Handshake,
  Target,
  Mail,
  MapPin,
  Globe,
  CalendarDays,
} from 'lucide-react';

export default function JRichManagementWebsite() {
  const services = [
    {
      icon: Home,
      title: 'Fix & Flip Consulting',
      text: 'End-to-end guidance on finding, analyzing, and executing profitable renovation opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategy',
      text: 'Strategic insight to help clients build strong real estate portfolios across Atlanta and Metro Atlanta.',
    },
    {
      icon: ClipboardList,
      title: 'Renovation Planning',
      text: 'Detailed renovation planning focused on improving value, market appeal, and project efficiency.',
    },
    {
      icon: Search,
      title: 'Acquisition Support',
      text: 'Property sourcing and deal analysis to help clients acquire the right property at the right price.',
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      text: 'Research-driven guidance on local trends, pricing, and investment potential.',
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: 'Military Background',
      text: 'Active Duty Service Member bringing discipline, leadership, and integrity to every project.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      text: 'Committed to strengthening communities through strategic property transformation.',
    },
    {
      icon: Handshake,
      title: 'Client First',
      text: 'Guidance tailored to client goals, risk tolerance, and long-term growth.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      text: 'Focused on helping clients identify opportunities and make informed real estate decisions.',
    },
  ];

  const projects = [
    { city: 'East Point, GA', result: 'Renovation strategy and resale positioning' },
    { city: 'Decatur, GA', result: 'Market analysis and acquisition review' },
    { city: 'Atlanta, GA', result: 'Fix & flip planning and value-add guidance' },
    { city: 'Lithonia, GA', result: 'Investment review and renovation scope planning' },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-yellow-700/30 bg-black/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center border border-yellow-600 bg-black text-4xl font-serif text-yellow-500">JR</div>
            <div>
              <div className="font-serif text-2xl tracking-wide text-yellow-500">J. RICH</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/80">Management Group</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
            <a className="text-yellow-500" href="#home">Home</a>
            <a className="hover:text-yellow-500" href="#about">About</a>
            <a className="hover:text-yellow-500" href="#services">Services</a>
            <a className="hover:text-yellow-500" href="#projects">Properties / Projects</a>
            <a className="hover:text-yellow-500" href="#contact">Contact</a>
          </nav>
          <a href="mailto:admin@jrichmgmt.org" className="hidden rounded-sm bg-yellow-600 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-yellow-500 md:inline-flex">Contact Us</a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,138,4,.35),transparent_35%),linear-gradient(120deg,rgba(0,0,0,.98),rgba(0,0,0,.72))]" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div className="relative z-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">Atlanta & Metro Atlanta</p>
              <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">
                Strategic <span className="text-yellow-500">Real Estate</span> Consulting.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                Professional consulting for investors and property owners seeking smarter fix & flip opportunities, renovation strategy, and market guidance throughout Atlanta.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#services" className="rounded-sm bg-yellow-600 px-7 py-4 text-center text-sm font-bold uppercase text-black transition hover:bg-yellow-500">Our Services</a>
                <a href="#projects" className="rounded-sm border border-yellow-600 px-7 py-4 text-center text-sm font-bold uppercase text-white transition hover:bg-yellow-600 hover:text-black">View Projects</a>
              </div>
            </div>
            <div className="relative z-10 mx-auto w-full max-w-md border border-yellow-600 bg-black p-10 shadow-2xl shadow-yellow-900/20">
              <div className="text-center font-serif text-[11rem] leading-none text-yellow-500">R</div>
              <div className="text-center font-serif text-5xl tracking-wider text-yellow-500">J RICH</div>
              <div className="mt-4 text-center text-sm uppercase tracking-[0.55em] text-yellow-200">Management Group</div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-700">Who We Are</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Real Estate Consulting Experts</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-700">
                J. Rich Management Group provides strategic real estate consulting for clients across Atlanta and Metro Atlanta. Led by an Active Duty Service Member with three years of experience, the company combines discipline, integrity, and community-focused leadership with practical fix & flip guidance.
              </p>
              <p className="mt-4 text-lg leading-8 text-zinc-700">
                Our mission is to help clients evaluate opportunities, reduce risk, plan renovations, and make informed property decisions that support long-term value and stronger communities.
              </p>
              <a href="#contact" className="mt-8 inline-flex rounded-sm bg-yellow-600 px-7 py-4 text-sm font-bold uppercase text-black transition hover:bg-yellow-500">Learn More About Us</a>
            </div>
            <div className="rounded-sm border border-zinc-200 bg-zinc-50 p-8 shadow-xl">
              <div className="aspect-[4/3] rounded-sm bg-[linear-gradient(135deg,#111,#333_55%,#c28d2c)] p-8 text-white">
                <div className="flex h-full flex-col justify-end border border-yellow-500/60 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Service - Strategy - Community</p>
                  <h3 className="mt-4 font-serif text-4xl">Building Communities Through Strategic Real Estate.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-black px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">What We Do</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Our Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-5">
              {services.map((service) => (
                <div key={service.title} className="border border-yellow-600/50 bg-zinc-950 p-6 text-center transition hover:-translate-y-1 hover:border-yellow-500">
                  <service.icon className="mx-auto mb-5 h-11 w-11 text-yellow-500" />
                  <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-6 text-white/70">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Why Choose J. Rich Management Group?</h2>
              <div className="mx-auto mt-5 h-1 w-24 bg-yellow-600" />
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="mx-auto mb-5 h-12 w-12 text-yellow-700" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-zinc-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-black px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Portfolio</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Featured Projects</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {projects.map((project, index) => (
                <div key={project.city} className="overflow-hidden border border-yellow-600/70 bg-zinc-950">
                  <div className="grid h-44 grid-cols-2">
                    <div className="flex items-end bg-zinc-800 p-3 text-xs font-bold uppercase text-yellow-400">Before</div>
                    <div className="flex items-end bg-zinc-700 p-3 text-xs font-bold uppercase text-yellow-400">After</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{project.city}</h3>
                    <p className="mt-2 text-sm text-white/70">{project.result}</p>
                    <p className="mt-4 text-xs uppercase tracking-wider text-yellow-500">Project #{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#contact" className="inline-flex rounded-sm border border-yellow-600 px-8 py-4 text-sm font-bold uppercase transition hover:bg-yellow-600 hover:text-black">Discuss Your Project</a>
            </div>
          </div>
        </section>

        <section className="bg-yellow-600 px-6 py-10 text-black">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-yellow-500">
                <CalendarDays className="h-8 w-8" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold">Ready to Build Your Next Successful Project?</h2>
                <p className="mt-1 text-black/80">Let&apos;s turn opportunities into informed real estate decisions.</p>
              </div>
            </div>
            <a href="mailto:admin@jrichmgmt.org?subject=Real%20Estate%20Consultation%20Request" className="rounded-sm bg-black px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-zinc-900">Schedule a Consultation</a>
          </div>
        </section>

        <section id="contact" className="bg-zinc-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Contact Us</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Start the Conversation</h2>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Contact J. Rich Management Group to discuss fix & flip consulting, acquisition support, renovation strategy, or real estate opportunities across Atlanta and Metro Atlanta.
              </p>
              <div className="mt-8 space-y-4 text-white/85">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-yellow-500" /> admin@jrichmgmt.org</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-yellow-500" /> Atlanta, GA</p>
                <p className="flex items-center gap-3"><Globe className="h-5 w-5 text-yellow-500" /> jrichmgmt.org</p>
              </div>
            </div>
            <form action="mailto:admin@jrichmgmt.org" method="post" encType="text/plain" className="rounded-sm border border-yellow-600/50 bg-black p-8">
              <label className="mb-2 block text-sm font-bold uppercase text-yellow-500">Name</label>
              <input name="name" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-600" required />
              <label className="mb-2 block text-sm font-bold uppercase text-yellow-500">Email</label>
              <input name="email" type="email" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-600" required />
              <label className="mb-2 block text-sm font-bold uppercase text-yellow-500">Message</label>
              <textarea name="message" rows="5" className="mb-5 w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-600" required />
              <button type="submit" className="w-full rounded-sm bg-yellow-600 px-7 py-4 text-sm font-bold uppercase text-black transition hover:bg-yellow-500">Submit Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="font-serif text-5xl text-yellow-500">JR</div>
            <div className="mt-2 font-serif text-2xl text-yellow-500">J. RICH</div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/70">Management Group</div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-yellow-500">Quick Links</h3>
            <div className="space-y-2 text-white/75">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#projects">Properties / Projects</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-yellow-500">Areas We Serve</h3>
            <p className="text-white/75">Atlanta, GA</p>
            <p className="text-white/75">Metro Atlanta</p>
            <p className="text-white/75">Surrounding areas</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-yellow-500">Connect</h3>
            <p className="text-white/75">admin@jrichmgmt.org</p>
            <div className="mt-5 flex gap-4 text-yellow-500">
              <span className="font-bold">f</span>
              <span className="font-bold">IG</span>
              <span className="font-bold">in</span>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">© 2026 J. Rich Management Group LLC. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
