import Chat from "./components/Chat";

const tools = [
  ["✦", "AI Chat", "Ask questions, learn, brainstorm and create with an AI assistant."],
  ["✎", "AI Writer", "Create emails, LinkedIn posts, articles, captions and more."],
  ["▤", "Summarizer", "Turn long text into concise, useful key points."],
  ["⌘", "Idea Generator", "Generate content, project, business and YouTube ideas."],
  ["▣", "Prompt Helper", "Turn a rough request into a clear, powerful AI prompt."],
  ["＋", "More tools", "Keep expanding AITechWithSandeep with practical AI utilities."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="brandMark">AI</span><span>AITechWithSandeep</span></div>
        <div className="navLinks">
          <a href="#home">Home</a><a href="#tools">AI Tools</a><a href="#chat">AI Chat</a><a href="#about">About</a>
        </div>
        <a className="navCta" href="#chat">Try AI Free</a>
      </nav>

      <section id="home" className="hero">
        <div className="heroCopy">
          <div className="pill">✦ Free AI tools • Built by Sandeep</div>
          <h1>One place for<br /><span>AI-powered work.</span></h1>
          <p>Chat with AI, write better, summarize content and explore practical AI tools — simple, fast and free for users.</p>
          <div className="heroActions">
            <a className="primary" href="#chat">Start AI Chat →</a>
            <a className="secondary" href="#tools">Explore Tools</a>
          </div>
          <div className="trust"><span>✓ Free for users</span><span>✓ No subscription</span><span>✓ Practical AI</span></div>
        </div>

        <div className="heroCard">
          <div className="windowTop"><i></i><i></i><i></i><label>AITechWithSandeep AI</label></div>
          <div className="miniChat">
            <div className="bubble userBubble">Explain automotive cybersecurity simply.</div>
            <div className="bubble aiBubble">Automotive cybersecurity protects vehicles, ECUs, communication networks and connected services from unauthorized access and attacks.</div>
            <div className="suggestions"><span>Write an email</span><span>Summarize text</span><span>Brainstorm ideas</span></div>
          </div>
        </div>
      </section>

      <section id="tools" className="section">
        <div className="sectionHeading"><span className="eyebrow">AI TOOLS</span><h2>Useful tools, without the clutter.</h2><p>Start with AI chat and gradually turn the platform into your personal AI toolkit.</p></div>
        <div className="toolGrid">
          {tools.map(([icon,title,desc], i) => (
            <article className={`toolCard ${i===0 ? "featured":""}`} key={title}>
              <div className="toolIcon">{icon}</div><h3>{title}</h3><p>{desc}</p>
              <a href={i===0 ? "#chat" : "#chat"}>Open tool →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="chat" className="section chatSection">
        <div className="sectionHeading"><span className="eyebrow">AI CHAT</span><h2>Your AI assistant.</h2><p>Ask questions, create content, learn technical topics and get practical help.</p></div>
        <Chat />
      </section>

      <section id="about" className="about">
        <div><span className="eyebrow">ABOUT</span><h2>AI made practical.</h2></div>
        <p>AITechWithSandeep is a personal AI platform focused on practical tools and learning. The first release is free for users and is designed to grow into a broader AI toolkit.</p>
      </section>

      <footer><div className="brand"><span className="brandMark">AI</span><span>AITechWithSandeep</span></div><span>© 2026 AITechWithSandeep</span></footer>
    </main>
  );
}
