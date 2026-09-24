import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  ChevronRight,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Play,
  Quote,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    number: '01',
    title: 'Small Business\nManagement Platform',
    description: 'A practical business-tech concept simplifying everyday operations through WhatsApp workflows and voice-first data capture.',
    tags: ['AI-assisted', 'WhatsApp', 'Voice to text'],
    accent: 'lime',
    icon: <MessageCircle size={22} />,
  },
  {
    number: '02',
    title: 'Smart Education /\nPersonalized Learning',
    description: 'A diagnostic-first learning experience that turns a student’s current level into a clear, personalized study path.',
    tags: ['Adaptive learning', 'Assessment', 'Personalization'],
    accent: 'blue',
    icon: <GraduationCap size={22} />,
  },
  {
    number: '03',
    title: 'AI Media Authenticity /\nScam Detection',
    description: 'An AI-powered digital safety concept for examining image, video, and audio signals that may be manipulated or misleading.',
    tags: ['Computer vision', 'Digital safety', 'Analysis'],
    accent: 'orange',
    icon: <BrainCircuit size={22} />,
  },
  {
    number: '04',
    title: 'Personalized Laptop\nRecommendation System',
    description: 'A focused decision-support platform matching real user needs to laptop specifications, comparisons, and recommendations.',
    tags: ['Recommendations', 'Comparison', 'User needs'],
    accent: 'violet',
    icon: <Zap size={22} />,
  },
];

const skillGroups = [
  { title: 'AI & Machine Learning', copy: 'Exploring intelligent systems and practical AI-powered solutions.', icon: <BrainCircuit /> },
  { title: 'Web & Prototyping', copy: 'Building responsive, interactive experiences from early concepts.', icon: <Globe2 /> },
  { title: 'Python & Fundamentals', copy: 'Strengthening problem-solving with a focus on AI/ML applications.', icon: <Code2 /> },
  { title: 'Computer Science', copy: 'Growing across DSA, databases, OS, OOP, and software engineering.', icon: <Database /> },
];

const strengths = ['Problem Solving', 'Rapid Learning', 'Creative Ideation', 'AI-Powered Prototyping', 'Team Collaboration', 'Presentation', 'Experimentation'];
const process = ['Brainstorming', 'Problem analysis', 'Ideation', 'Rapid prototyping', 'Development', 'Presentation'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Praveen Kumar home">
          <span className="brand-mark">SV</span>
          <span>PRAVEEN KUMAR</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="hero section-frame" id="home">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="pulse-dot" /> Available for opportunities · 2026</div>
            <p className="hero-kicker">S.V. PRAVEEN KUMAR</p>
            <h1>Building the<br /><em>next idea.</em></h1>
            <p className="hero-description">Computer Science Engineering student specializing in Artificial Intelligence &amp; Machine Learning — turning curious questions into practical, digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/praveen-kumar-s-v" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
              <a href="https://github.com/praveenkumar251656-coder" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
              <span className="social-divider" />
              <span>AI / ML · Web · Innovation</span>
            </div>
          </div>
          <div className="hero-visual reveal-scale">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="profile-placeholder">
              <div className="profile-shine" />
              <img
                className="profile-image"
                src="https://cdn.postimage.me/2026/09/24/abc.jpeg"
                alt="S.V. Praveen Kumar"
                loading="eager"
              />
            </div>
            <div className="visual-note note-top"><Sparkles size={14} /> Curious by default</div>
            <div className="visual-note note-bottom">01 <span /> Aspiring AI/ML developer</div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <section className="intro section-frame" id="about">
          <div className="section-label"><span>01</span><span className="label-line" /><span>About me</span></div>
          <div className="intro-grid">
            <h2>Curiosity is my<br /><span>starting point.</span></h2>
            <div className="intro-copy">
              <p className="lead-copy">I’m Praveen — a CSE student exploring the intersection of intelligent systems, thoughtful software, and modern web experiences.</p>
              <p>I enjoy experimenting with AI-powered tools, building innovative projects, and taking ideas from a rough sketch to something people can actually experience. My goal is to grow into a skilled AI/ML and software professional through internships, real-world projects, and continuous learning.</p>
              <a className="text-link" href="#skills">A little more about how I work <ChevronRight size={16} /></a>
            </div>
          </div>
          <div className="about-cards">
            <div className="about-card"><span className="card-index">01</span><Sparkles size={20} /><h3>Exploration</h3><p>Emerging technologies, GenAI, CV, NLP, and what comes next.</p></div>
            <div className="about-card highlighted"><span className="card-index">02</span><Zap size={20} /><h3>Rapid prototyping</h3><p>Turning problem statements into functional, demonstrable ideas.</p></div>
            <div className="about-card"><span className="card-index">03</span><Network size={20} /><h3>Growth mindset</h3><p>Strengthening programming, DSA, and development fundamentals.</p></div>
          </div>
        </section>

        <section className="skills section-frame" id="skills">
          <div className="section-label"><span>02</span><span className="label-line" /><span>Skills &amp; expertise</span></div>
          <div className="section-heading-row"><h2>Built to learn.<br /><span>Ready to build.</span></h2><p>Not percentage bars. Just a growing toolkit, driven by practice, questions, and real projects.</p></div>
          <div className="skills-layout">
            <div className="skill-list">{skillGroups.map((skill, index) => <button className={`skill-item ${activeSkill === index ? 'active' : ''}`} key={skill.title} onClick={() => setActiveSkill(index)}><span className="skill-icon">{skill.icon}</span><span>{skill.title}</span><ChevronRight size={17} /></button>)}</div>
            <div className="skill-detail"><div className="detail-glow" /><span className="detail-number">0{activeSkill + 1}</span>{skillGroups[activeSkill].icon}<h3>{skillGroups[activeSkill].title}</h3><p>{skillGroups[activeSkill].copy}</p><div className="tag-cloud"><span>Generative AI</span><span>Computer Vision</span><span>NLP</span><span>AI-assisted development</span><span>Modern web</span></div></div>
          </div>
          <div className="strengths"><span>Core strengths</span><div>{strengths.map((strength) => <span key={strength} className="strength-pill">{strength}</span>)}</div></div>
        </section>

        <section className="services section-frame">
          <div className="section-label"><span>03</span><span className="label-line" /><span>What I build</span></div>
          <div className="services-intro"><h2>Ideas deserve<br /><span>to be tested.</span></h2><p>I focus on building practical, visually engaging, and technology-driven digital experiences.</p></div>
          <div className="service-grid">{['AI-powered prototypes', 'Web development', 'AI-assisted development', 'Hackathon solutions', 'UI/UX & interactive experiences', 'Project prototyping'].map((service, index) => <div className="service-row" key={service}><span>0{index + 1}</span><h3>{service}</h3><ArrowUpRight size={18} /><p>{['Concept applications that bring AI/ML into practical real-world use cases.', 'Responsive websites with modern UI and considered user experiences.', 'Using modern tools to move from idea to functional prototype quickly.', 'Innovative proof-of-concept solutions built under time constraints.', 'Clean interfaces with visual storytelling and purposeful motion.', 'Early-stage ideas shaped into demonstrable working products.'][index]}</p></div>)}</div>
        </section>

        <section className="projects section-frame" id="projects">
          <div className="section-label"><span>04</span><span className="label-line" /><span>Selected projects</span></div>
          <div className="section-heading-row projects-heading"><h2>Ideas, in<br /><span>progress.</span></h2><p>Concepts and prototypes that reflect how I think: practical, curious, and always looking for a better interaction.</p></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-art"><span className="project-number">{project.number}</span><div className="art-icon">{project.icon}</div><div className="art-lines"><i /><i /><i /><i /></div><span className="art-label">{project.number} / 04</span></div><div className="project-info"><div className="project-meta"><span>Concept project</span><ArrowUpRight size={16} /></div><h3>{project.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="journey section-frame" id="journey">
          <div className="section-label"><span>05</span><span className="label-line" /><span>Journey</span></div>
          <div className="journey-grid"><div><h2>Learning in<br /><span>public.</span></h2><p className="lead-copy">Every project is a chance to ask better questions, work with others, and make something tangible.</p><div className="training-card"><div className="training-icon"><BookIcon /></div><div><span className="small-label">Training program</span><h3>Zoho Books</h3><p>Practical exposure to business and accounting software through a college-conducted training program.</p></div><ArrowUpRight size={18} /></div></div><div className="process-panel"><span className="small-label">The innovation loop</span><p>From a blank page to a working prototype.</p><div className="process-list">{process.map((step, index) => <div className="process-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < process.length - 1 && <div className="step-line" />}</div>)}</div></div></div>
        </section>

        <section className="contact section-frame" id="contact">
          <div className="contact-orb" /><div className="section-label"><span>06</span><span className="label-line" /><span>Start a conversation</span></div>
          <div className="contact-content"><Quote size={32} /><h2>Let’s build something<br /><em>meaningful.</em></h2><p>Have an idea, project, collaboration, or opportunity? Feel free to connect.</p><a className="button button-primary" href="mailto:praveenkumar251656@gmail.com">Send an email <Mail size={17} /></a><div className="contact-links"><a href="mailto:praveenkumar251656@gmail.com"><span><Mail size={16} /></span>praveenkumar251656@gmail.com<ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/praveen-kumar-s-v" target="_blank" rel="noopener noreferrer"><span><Linkedin size={16} /></span>Praveen Kumar S.V.<ArrowUpRight size={15} /></a><a href="https://github.com/praveenkumar251656-coder" target="_blank" rel="noopener noreferrer"><span><Github size={16} /></span>praveenkumar251656-coder<ArrowUpRight size={15} /></a></div></div>
        </section>
      </main>

      <footer className="footer section-frame"><a className="brand" href="#home"><span className="brand-mark">SV</span><span>PRAVEEN KUMAR</span></a><span>AI/ML · SOFTWARE · WEB · INNOVATION</span><span>© 2026 · Built with curiosity</span></footer>
    </div>
  );
}

function BookIcon() {
  return <span className="book-icon"><span /><span /></span>;
}

export default App;
