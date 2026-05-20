import { createFileRoute } from "@tanstack/react-router";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Mail, Phone, Github, Twitter, ArrowUpRight, Download, User, Sparkles, FolderGit2, Award, Send, Home } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Joseph John — Data Science Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Joseph John, Data Science Engineer specializing in machine learning, NLP and LLM applications.",
      },
      { property: "og:title", content: "Joseph John — Data Science Engineer" },
      {
        property: "og:description",
        content:
          "Machine learning, NLP and LLM projects by Joseph John.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const NAV = [
  { id: "top", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Sparkles },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "certifications", label: "Certs", Icon: Award },
  { id: "contact", label: "Contact", Icon: Send },
];

const SKILLS = [
  { group: "Programming", items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { group: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "Keras"] },
  { group: "Data Visualization", items: ["EDA", "Streamlit", "Power BI"] },
  { group: "AI & NLP", items: ["LLMs", "spaCy", "NLTK", "Transformers"] },
  { group: "Databases", items: ["SQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Jupyter", "Colab"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "Desights AI Prediction",
    blurb:
      "Forecasting the Federal Reserve's interest-rate decisions across five possible rate changes using supervised models on macro indicators.",
    tags: ["Machine Learning", "Python", "Forecasting"],
  },
  {
    n: "02",
    title: "PladaAI — Plagiarism Detector",
    blurb:
      "Web app for academic plagiarism detection combining NLP, ML classifiers and a grammar-semantics hybrid for real-time checks.",
    tags: ["NLP", "ML", "Web App"],
  },
  {
    n: "03",
    title: "Skin Cancer Detector",
    blurb:
      "Streamlit deep-learning system using an Xception CNN to classify dermatological images into nine lesion categories.",
    tags: ["TensorFlow", "Xception", "Computer Vision"],
  },
  {
    n: "04",
    title: "Customer Churn Prediction",
    blurb:
      "End-to-end data-science workflow that predicts churn from customer profile and usage signals, deployed via Streamlit.",
    tags: ["Scikit-learn", "Python", "Streamlit"],
  },
];

const CERTS = [
  "Hugging Face Transformers & LLMs — 2025",
  "Python for Data Science & AI — IBM, 2024",
  "Machine Learning with Python — IBM, 2024",
  "Cisco Cybersecurity — 2020",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-t border-border pb-[env(safe-area-inset-bottom)]">
      <ul className="grid grid-cols-6">
        {NAV.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex flex-col items-center gap-1 py-2.5 text-[10px] tracking-wider2 uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-display tracking-wider2 text-sm">
          JOSEPH&nbsp;·&nbsp;JOHN
        </a>
        <nav className="hidden md:flex gap-10 text-xs tracking-wider2 uppercase text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="font-display tracking-mega text-xs md:text-sm text-muted-foreground mb-8">
          PORTFOLIO · 2025
        </p>
        <h1 className="font-display font-extralight tracking-mega text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          DATA&nbsp;SCIENTIST
          <br />
          <span className="inline-block mt-4">PORTFOLIO</span>
        </h1>
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 hairline" />
          <p className="font-display tracking-wider2 text-xs md:text-sm uppercase text-muted-foreground">
            Joseph John · Machine Learning & AI
          </p>
          <span className="h-px w-12 hairline" />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-wider2 uppercase">Scroll</span>
        <span className="h-10 w-px hairline" />
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-16 flex flex-col items-start">
      <span className="font-display tracking-mega text-[10px] text-accent uppercase mb-3">
        {kicker}
      </span>
      <h2 className="section-title text-3xl md:text-5xl text-foreground">{title}</h2>
      <span className="mt-6 block h-px w-24 hairline" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionHeading kicker="01 — About" title="About" />
        </div>
        <div className="md:col-span-7 md:col-start-6 border-l border-border pl-8 md:pl-12">
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
            Passionate, results-driven data-science professional with expertise in
            Python, machine learning and data analysis. I build intelligent
            systems — from a skin-cancer detection model in TensorFlow to NLP
            tools powered by LLMs — and enjoy translating complex concepts
            into clear, useful products.
          </p>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {[
              ["Role", "Data Science Engineer"],
              ["Focus", "ML · NLP · LLMs"],
              ["Based in", "Remote"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display tracking-wider2 text-[10px] uppercase text-muted-foreground mb-2">
                  {k}
                </dt>
                <dd className="text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12 bg-deep">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="02 — Expertise" title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SKILLS.map((s) => (
            <div key={s.group} className="bg-deep p-8 hover:bg-background/40 transition-colors">
              <h3 className="font-display tracking-wider2 text-[11px] uppercase text-accent mb-5">
                {s.group}
              </h3>
              <ul className="space-y-2 text-foreground/90">
                {s.items.map((it) => (
                  <li key={it} className="text-base font-light">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="03 — Selected work" title="Projects" />
        <ul className="border-t border-border">
          {PROJECTS.map((p) => (
            <li
              key={p.n}
              className="group border-b border-border py-10 grid md:grid-cols-12 gap-6 items-start hover:bg-background/40 transition-colors cursor-pointer"
            >
              <div className="md:col-span-1 font-display tracking-wider2 text-xs text-muted-foreground pt-2">
                {p.n}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-5 text-foreground/80 font-light leading-relaxed">
                {p.blurb}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-wider2 uppercase px-2.5 py-1 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-end">
                <span className="inline-flex items-center gap-2 text-xs tracking-wider2 uppercase text-accent group-hover:text-foreground transition-colors">
                  View <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6 lg:px-12 bg-deep">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionHeading kicker="04 — Credentials" title="Certifications" />
        </div>
        <ul className="md:col-span-7 md:col-start-6 border-l border-border">
          {CERTS.map((c, i) => (
            <li key={c} className="pl-8 md:pl-12 py-5 border-b border-border flex items-baseline gap-5">
              <span className="font-display text-xs text-muted-foreground tracking-wider2">
                0{i + 1}
              </span>
              <span className="text-base md:text-lg font-light">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="05 — Let's talk" title="Contact" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 max-w-md">
              Open to new projects, collaborations and opportunities. Reach
              out and let's build something useful with data.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 border border-hairline px-6 py-3 text-xs tracking-wider2 uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <ul className="space-y-px bg-border">
            {[
              { Icon: Mail, label: "Email", value: "godenaanjay@gmail.com", href: "mailto:godenaanjay@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+234 903 195 0959", href: "tel:+2349031950959" },
              { Icon: Github, label: "GitHub", value: "@Iamkvng01", href: "https://github.com/Iamkvng01" },
              { Icon: Twitter, label: "X (Twitter)", value: "@iamkvngjay01", href: "https://x.com/iamkvngjay01" },
            ].map(({ Icon, label, value, href }) => (
              <li key={label} className="bg-background">
                <a href={href} className="flex items-center gap-5 p-5 hover:bg-deep transition-colors">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <div className="font-display tracking-wider2 text-[10px] uppercase text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-base font-light">{value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wider2 uppercase text-muted-foreground">
        <span>© 2025 Joseph John</span>
        <span>Data Scientist Portfolio</span>
      </div>
    </footer>
  );
}
