import { useEffect, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Menu, X } from 'lucide-react';
import {
  SiAngular, SiDocker, SiGraphql, SiJavascript, SiLaravel, SiMysql,
  SiPhp, SiReact, SiRedis, SiTypescript, SiVuedotjs,
} from 'react-icons/si';

const colors = {
  ink: '#18211d', muted: '#657069', green: '#176b4d', greenDark: '#0d4934',
  mint: '#dff4e8', lime: '#dff66a', paper: '#f7f8f3', white: '#fff', line: '#dce2db',
};
const fadeUp = keyframes`from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}`;

const GlobalStyle = createGlobalStyle`
  *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;min-width:320px;background:${colors.paper};color:${colors.ink};font-family:Manrope,sans-serif}
  button,a{color:inherit;font:inherit}a{text-decoration:none}::selection{background:${colors.lime};color:${colors.ink}}
  button:focus-visible,a:focus-visible{outline:3px solid ${colors.lime};outline-offset:4px}
  @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation:none!important}}
`;
const Container = styled.div`width:min(1440px,calc(100% - 64px));margin-inline:auto;@media(max-width:600px){width:calc(100% - 32px)}`;
const Header = styled.header`
  position:sticky;top:0;z-index:20;background:#f7f8f3e8;backdrop-filter:blur(14px);border-bottom:1px solid ${colors.line};
  nav{height:76px;display:flex;align-items:center;justify-content:space-between}.brand{font-size:19px;font-weight:800;letter-spacing:-.04em}.brand i{font-style:normal;color:${colors.green}}
  .links{display:flex;align-items:center;gap:28px;font-size:13px;font-weight:600}.links a:hover{color:${colors.green}}.contact{background:${colors.ink};color:white;padding:11px 17px;border-radius:999px;display:flex;gap:8px;align-items:center}.language{border:1px solid ${colors.line};background:${colors.white};border-radius:999px;padding:9px 12px;color:${colors.green};font:700 10px 'DM Mono';cursor:pointer}.language:hover{border-color:${colors.green}}
  .menu{display:none;border:0;background:transparent;padding:5px}@media(max-width:720px){.links{display:none}.menu{display:block}}
`;
const MobileNav = styled.div`
  position:fixed;inset:0;z-index:40;background:${colors.paper};padding:24px;display:flex;flex-direction:column;animation:${fadeUp} .25s ease;
  >button{align-self:flex-end;border:0;background:none}.mobile-brand{font-size:16px;font-weight:800;margin-top:-28px}.mobile-links{margin:auto 0;display:flex;flex-direction:column;align-items:flex-start;gap:24px;font-size:clamp(32px,10vw,48px);font-weight:650;letter-spacing:-.05em}.mobile-links a:hover{color:${colors.green}}.language{border:1px solid ${colors.green};border-radius:999px;padding:10px 14px;background:transparent;color:${colors.green};font:700 11px 'DM Mono';letter-spacing:0;cursor:pointer}
`;
const Hero = styled.section`
  padding:82px 0 70px;display:flex;align-items:center;position:relative;overflow:hidden;background:${colors.white};
  .grid{display:grid;grid-template-columns:280px minmax(0,1fr);gap:clamp(54px,7vw,110px);align-items:center}
  .portrait{align-self:start}.photo-frame{width:100%;aspect-ratio:1;padding:7px;border:1px solid #b9d6c5;border-radius:50%;position:relative}.photo-frame::after{content:'';position:absolute;width:15px;height:15px;border-radius:50%;background:${colors.lime};border:4px solid ${colors.white};right:18px;bottom:25px}.profile-photo{display:block;width:100%;height:100%;object-fit:cover;object-position:center;border-radius:50%}.availability{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:20px;color:${colors.muted};font:9px 'DM Mono';letter-spacing:.08em;text-transform:uppercase}.availability i{width:7px;height:7px;border-radius:50%;background:${colors.green}}
  .kicker{display:inline-flex;align-items:center;gap:10px;font:600 11px 'DM Mono',monospace;letter-spacing:.12em;color:${colors.green};text-transform:uppercase}.kicker::before{content:'';width:26px;height:2px;background:${colors.green}}
  h1{font-size:clamp(48px,5.7vw,80px);line-height:.96;letter-spacing:-.06em;margin:23px 0 24px;max-width:850px;font-weight:650}h1 em{font-style:normal;color:${colors.green}}
  .lead{font-size:clamp(16px,1.35vw,19px);line-height:1.65;color:${colors.muted};max-width:850px;margin:0}.actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
  .quick-info{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:38px;border-top:1px solid ${colors.line};padding-top:22px;max-width:850px}.quick-item{padding-right:22px}.quick-item+.quick-item{padding-left:22px;border-left:1px solid ${colors.line}}.quick-item span{display:block;font:9px 'DM Mono';letter-spacing:.1em;text-transform:uppercase;color:${colors.muted};margin-bottom:7px}.quick-item strong{font-size:13px;line-height:1.45}
  @media(max-width:800px){padding:62px 0;.grid{grid-template-columns:150px minmax(0,1fr);gap:32px}.availability{font-size:8px}h1{font-size:clamp(43px,9vw,66px)}}
  @media(max-width:620px){.grid{grid-template-columns:1fr}.portrait{display:flex;align-items:center;gap:18px}.photo-frame{width:112px;flex:none}.availability{justify-content:flex-start;margin:0}.quick-info{grid-template-columns:1fr;gap:0}.quick-item{padding:12px 0}.quick-item+.quick-item{padding-left:0;border-left:0;border-top:1px solid ${colors.line}}}
`;
const Button = styled.a`
  display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 20px;border-radius:999px;background:${p=>p.$secondary?'transparent':colors.green};color:${p=>p.$secondary?colors.ink:'white'};border:1px solid ${p=>p.$secondary?colors.line:colors.green};font-size:13px;font-weight:700;transition:.2s;
  &:hover{transform:translateY(-2px);background:${p=>p.$secondary?colors.white:colors.greenDark}}
`;
const Section = styled.section`padding:82px 0;border-top:1px solid ${colors.line};@media(max-width:700px){padding:62px 0}`;
const SectionHead = styled.div`
  display:grid;grid-template-columns:180px 1fr;gap:40px;margin-bottom:46px;.label{font:600 11px 'DM Mono';letter-spacing:.12em;color:${colors.green};text-transform:uppercase;padding-top:8px}h2{font-size:clamp(32px,4vw,50px);line-height:1.08;letter-spacing:-.045em;margin:0;font-weight:650;max-width:760px}h2 em{font-style:normal;color:${colors.green}}
  @media(max-width:700px){grid-template-columns:1fr;gap:15px;margin-bottom:40px;.label{padding:0}}
`;
const AboutGrid = styled.div`
  display:grid;grid-template-columns:1.25fr .75fr;gap:72px;.copy p{font-size:16px;line-height:1.75;color:#4e5a53;margin:0 0 18px}.copy p:first-child{font-size:21px;line-height:1.55;color:${colors.ink};letter-spacing:-.02em}.facts{display:flex;flex-direction:column;gap:0}.fact{padding:19px 0;border-bottom:1px solid ${colors.line}}.fact:first-child{padding-top:0}.fact span{display:block;font:10px 'DM Mono';color:${colors.green};letter-spacing:.1em;margin-bottom:7px}.fact strong{font-size:14px;line-height:1.5;display:block}
  @media(max-width:700px){grid-template-columns:1fr;gap:35px}
`;
const SkillsSection = styled(Section)`background:${colors.white};`;
const SkillsGrid = styled.div`
  display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid ${colors.line};border-left:1px solid ${colors.line};
  @media(max-width:850px){grid-template-columns:repeat(4,1fr)}@media(max-width:550px){grid-template-columns:repeat(2,1fr)}
`;
const Skill = styled.div`
  min-height:120px;padding:18px;border-right:1px solid ${colors.line};border-bottom:1px solid ${colors.line};display:flex;flex-direction:column;justify-content:space-between;transition:.2s;background:white;
  svg{font-size:34px;color:${p=>p.$color || colors.green}}span{font-size:13px;font-weight:700}small{font:9px 'DM Mono';color:#9aa39d;float:right;margin-top:4px} &:hover{background:${colors.mint};transform:translateY(-3px);box-shadow:0 12px 30px #1e53300e}
`;
const ProjectSection = styled(Section)`background:${colors.greenDark};color:white;border:0;${SectionHead}{.label{color:${colors.lime}}h2 em{color:${colors.lime}}}`;
const ProjectCard = styled.article`
  display:grid;grid-template-columns:1fr 1fr;background:${colors.paper};color:${colors.ink};min-height:400px;border-radius:5px;overflow:hidden;
  .visual{background:#dfe9ef;padding:34px;display:flex;align-items:center;justify-content:center;position:relative}.browser{width:100%;max-width:630px;background:white;border-radius:12px;box-shadow:0 25px 60px #17433232;overflow:hidden}.browser-top{height:38px;border-bottom:1px solid #e7e7e7;display:flex;align-items:center;gap:6px;padding:0 14px}.browser-top i{width:7px;height:7px;border-radius:50%;background:#cdd2cf}.browser-body{height:300px;background:linear-gradient(145deg,#faf6ee,#e8f2ef);padding:32px}.book-logo{width:54px;height:54px;border-radius:16px;background:${colors.green};color:${colors.lime};display:grid;place-items:center;font:700 20px Georgia}.browser-body h3{font:500 30px/1.05 Georgia;margin:20px 0 10px;color:#213a32}.browser-body p{font-size:12px;color:#718078;max-width:330px}.chat-line{height:10px;background:white;border-radius:10px;margin-top:28px;box-shadow:0 0 0 1px #dde6e1;width:85%}
  .info{padding:42px;display:flex;flex-direction:column}.number{font:10px 'DM Mono';color:${colors.green};letter-spacing:.1em}.info h3{font-size:34px;letter-spacing:-.04em;margin:38px 0 16px}.info p{color:${colors.muted};font-size:15px;line-height:1.7;margin:0}.tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:25px}.tags span{border:1px solid ${colors.line};border-radius:999px;padding:7px 10px;font:9px 'DM Mono';text-transform:uppercase}.project-link{margin-top:auto;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;border-top:1px solid ${colors.line};padding-top:20px;color:${colors.green}}
  @media(max-width:800px){grid-template-columns:1fr;.visual{padding:22px}.info{padding:32px}.info h3{margin:25px 0 15px}.project-link{margin-top:35px}}
`;
const Contact = styled.section`
  background:${colors.lime};padding:46px 0;.row{display:grid;grid-template-columns:minmax(260px,.7fr) 1.3fr;align-items:center;gap:60px}.label{font:600 10px 'DM Mono';letter-spacing:.12em;text-transform:uppercase}.row h2{font-size:clamp(25px,2.5vw,36px);line-height:1.15;letter-spacing:-.04em;margin:10px 0 0;max-width:520px;font-weight:650}.contact-list{display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid #bfd34f}.contact-item{min-height:70px;padding:8px 22px;border-right:1px solid #bfd34f;display:flex;flex-direction:column;justify-content:center;gap:8px}.contact-item span{display:flex;align-items:center;gap:7px;font:9px 'DM Mono';letter-spacing:.1em;text-transform:uppercase;color:#4f5d26}.contact-item strong{font-size:13px;line-height:1.4;overflow-wrap:anywhere}.contact-item:hover strong{text-decoration:underline}
  @media(max-width:850px){.row{grid-template-columns:1fr;gap:30px}.contact-list{border-left:0;border-top:1px solid #bfd34f;padding-top:20px}}
  @media(max-width:600px){padding:38px 0;.contact-list{grid-template-columns:1fr}.contact-item{border-right:0;border-bottom:1px solid #bfd34f;padding:14px 0;min-height:auto}}
`;
const Footer = styled.footer`background:${colors.ink};color:#b8c1bb;padding:18px 0;font:9px 'DM Mono';.row{display:flex;justify-content:space-between;gap:20px}a:hover{color:${colors.lime}}@media(max-width:550px){.row{flex-direction:column;gap:8px}}`;

const skills = [
  ['PHP',SiPhp,'#777BB4'],['Laravel',SiLaravel,'#FF2D20'],['JavaScript',SiJavascript,'#c7a900'],['TypeScript',SiTypescript,'#3178C6'],
  ['Vue.js',SiVuedotjs,'#42B883'],['React',SiReact,'#149ECA'],['Angular',SiAngular,'#DD0031'],['GraphQL',SiGraphql,'#E10098'],
  ['MySQL',SiMysql,'#4479A1'],['SQL Server',SiMysql,'#CC2927'],['Docker',SiDocker,'#2496ED'],['Redis',SiRedis,'#DC382D'],
];
const translations = {
  pt: {
    nav: ['Sobre', 'Tecnologias', 'Projetos', 'Contato'], menuOpen: 'Abrir menu', menuClose: 'Fechar menu',
    role: 'Augusto Foss Silva · Engenheiro de Software', title: <>Desenvolvedor<br/><em>Full Stack.</em></>,
    intro: 'Mais de 5 anos desenvolvendo sistemas web, APIs e integrações. Conecto backend e frontend para criar aplicações completas, seguras e alinhadas às necessidades do negócio.',
    projectsButton: 'Ver projetos', resumeButton: 'Baixar currículo', location: 'Curitiba · Paraná',
    quick: [['Experiência','5+ anos em desenvolvimento'],['Stack principal','PHP · Laravel · TypeScript · React · Vue'],['Atuação atual','Sistemas educacionais e integrações']],
    aboutLabel: 'Sobre mim', aboutTitle: 'Perfil profissional',
    about: ['Engenheiro de software com foco em desenvolvimento full stack, integrando backend e frontend para criar soluções completas, eficientes e alinhadas ao negócio.','Atualmente trabalho com sistemas educacionais integrados a uma API, desenvolvendo funcionalidades, realizando integrações e contribuindo para a qualidade, segurança e desempenho das aplicações.','Sou proativo, colaborativo e aberto a desafios. Gosto de compreender o problema por completo, propor melhorias e aprender novas tecnologias.'],
    facts: [['EXPERIÊNCIA','5+ anos em desenvolvimento de software'],['FORMAÇÃO',<>Engenharia de Software<br/>PUC-PR · 2018–2021</>],['PÓS-GRADUAÇÃO',<>Engenharia de Software, DevOps e Transformação Digital<br/>PUC-PR · 2025–2026</>]],
    factsLocation: 'LOCALIZAÇÃO', skillsLabel: 'Stack técnica', skillsTitle: 'Tecnologias e ferramentas', projectLabel: 'Projetos', projectTitle: 'Trabalhos em destaque', projectNumber: 'PROJETO / 01',
    projectName: 'Chatbot literário com IA', projectDescription: 'Aplicação com inteligência artificial para conversar sobre livros, recomendar leituras e gerar resumos. Inclui autenticação, biblioteca privada e histórico individual de conversas.',
    tags: ['Inteligência artificial','Chatbot','Autenticação'], openProject: 'Abrir projeto', mockTitle: <>Seu universo literário,<br/>em uma conversa.</>, mockText: 'Descubra livros, explore histórias e mantenha sua biblioteca sempre por perto.',
    contact: 'Contato', contactTitle: 'Vamos conversar sobre oportunidades e projetos.', email: 'E-mail', linkedin: 'LinkedIn', footerRole: 'Engenheiro de Software · Desenvolvedor Full Stack', built: 'Desenvolvido com React', resume: '/augusto_foss_silva_curriculo_atualizado.pdf',
  },
  en: {
    nav: ['About', 'Technologies', 'Projects', 'Contact'], menuOpen: 'Open menu', menuClose: 'Close menu',
    role: 'Augusto Foss Silva · Software Engineer', title: <>Full Stack<br/><em>Developer.</em></>,
    intro: 'Over 5 years building web systems, APIs, and integrations. I connect backend and frontend to create complete, secure applications aligned with business needs.',
    projectsButton: 'View projects', resumeButton: 'Download CV', location: 'Curitiba · Brazil',
    quick: [['Experience','5+ years in software development'],['Core stack','PHP · Laravel · TypeScript · React · Vue'],['Current work','Educational systems and integrations']],
    aboutLabel: 'About me', aboutTitle: 'Professional profile',
    about: ['Software engineer focused on full stack development, connecting backend and frontend to build complete, efficient solutions aligned with business goals.','I currently work on educational systems integrated with an API, developing features and integrations while improving application quality, security, and performance.','I am proactive, collaborative, and open to new challenges. I enjoy understanding the whole problem, proposing improvements, and learning new technologies.'],
    facts: [['EXPERIENCE','5+ years in software development'],['EDUCATION',<>B.Sc. in Software Engineering<br/>PUC-PR · 2018–2021</>],['POSTGRADUATE',<>Software Engineering, DevOps & Digital Transformation<br/>PUC-PR · 2025–2026</>]],
    factsLocation: 'LOCATION', skillsLabel: 'Technical stack', skillsTitle: 'Technologies and tools', projectLabel: 'Projects', projectTitle: 'Featured work', projectNumber: 'PROJECT / 01',
    projectName: 'AI literary chatbot', projectDescription: 'An AI-powered application for discussing books, recommending titles, and generating summaries. It includes authentication, a private library, and an individual conversation history.',
    tags: ['Artificial intelligence','Chatbot','Authentication'], openProject: 'Open project', mockTitle: <>Your literary universe,<br/>in a conversation.</>, mockText: 'Discover books, explore stories, and keep your library close at hand.',
    contact: 'Contact', contactTitle: 'Let’s talk about opportunities and projects.', email: 'Email', linkedin: 'LinkedIn', footerRole: 'Software Engineer · Full Stack Developer', built: 'Built with React', resume: '/Augusto_Foss_Silva_Resume_Updated.pdf',
  },
};

function Navigation({language='pt',setLanguage,t=translations.pt}){const[open,setOpen]=useState(false);const ids=['sobre','tecnologias','projetos','contato'];const changeLanguage=()=>setLanguage?.(language==='pt'?'en':'pt');return <><Header><Container><nav><a className="brand" href="#inicio">Augusto Foss <i>Silva.</i></a><div className="links">{t.nav.slice(0,3).map((text,index)=><a key={ids[index]} href={`#${ids[index]}`}>{text}</a>)}<button className="language" onClick={changeLanguage} aria-label={language==='pt'?'View site in English':'Ver site em português'}>{language==='pt'?'EN':'PT'}</button><a className="contact" href="#contato">{t.nav[3]} <ArrowUpRight size={14}/></a></div><button className="menu" aria-label={t.menuOpen} onClick={()=>setOpen(true)}><Menu/></button></nav></Container></Header>{open&&<MobileNav><button aria-label={t.menuClose} onClick={()=>setOpen(false)}><X/></button><span className="mobile-brand">Augusto Foss Silva.</span><div className="mobile-links">{t.nav.map((text,index)=><a key={ids[index]} href={`#${ids[index]}`} onClick={()=>setOpen(false)}>{text}</a>)}<button className="language" onClick={changeLanguage}>{language==='pt'?'English version':'Versão em português'}</button></div></MobileNav>}</>}

export default function App(){
  const [language,setLanguage]=useState('pt');
  const activeLanguage=translations[language]?language:'pt';
  const t=translations[activeLanguage];
  useEffect(()=>{document.documentElement.lang=activeLanguage==='pt'?'pt-BR':'en';document.title=`Augusto Foss Silva — ${activeLanguage==='pt'?'Engenheiro de Software':'Software Engineer'}`},[activeLanguage]);
  return <><GlobalStyle/><Navigation language={activeLanguage} setLanguage={setLanguage} t={t}/><Hero id="inicio"><Container className="grid"><aside className="portrait"><div className="photo-frame"><img className="profile-photo" src="/1703252015862.jpg" alt={activeLanguage==='pt'?'Retrato de Augusto Foss Silva':'Portrait of Augusto Foss Silva'}/></div><div className="availability"><i/>{t.location}</div></aside><div className="hero-content"><span className="kicker">{t.role}</span><h1>{t.title}</h1><p className="lead">{t.intro}</p><div className="actions"><Button href="#projetos">{t.projectsButton} <ArrowDown size={15}/></Button><Button $secondary href={t.resume} target="_blank">{t.resumeButton} <Download size={15}/></Button></div><div className="quick-info">{t.quick.map(([label,value])=><div className="quick-item" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></Container></Hero>
  <Section id="sobre"><Container><SectionHead><span className="label">{t.aboutLabel}</span><h2>{t.aboutTitle}</h2></SectionHead><AboutGrid><div className="copy">{t.about.map(text=><p key={text}>{text}</p>)}</div><div className="facts">{t.facts.map(([label,value])=><div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}<div className="fact"><span>{t.factsLocation}</span><strong><MapPin size={13}/> Curitiba, {activeLanguage==='pt'?'Paraná':'Brazil'}</strong></div></div></AboutGrid></Container></Section>
  <SkillsSection id="tecnologias"><Container><SectionHead><span className="label">{t.skillsLabel}</span><h2>{t.skillsTitle}</h2></SectionHead><SkillsGrid>{skills.map(([name,Icon,color],i)=><Skill key={name} $color={color}><Icon/><div><span>{name}</span><small>{String(i+1).padStart(2,'0')}</small></div></Skill>)}</SkillsGrid></Container></SkillsSection>
  <ProjectSection id="projetos"><Container><SectionHead><span className="label">{t.projectLabel}</span><h2>{t.projectTitle}</h2></SectionHead><ProjectCard><div className="visual"><div className="browser"><div className="browser-top"><i/><i/><i/></div><div className="browser-body"><div className="book-logo">Ai</div><h3>{t.mockTitle}</h3><p>{t.mockText}</p><div className="chat-line"/></div></div></div><div className="info"><span className="number">{t.projectNumber}</span><h3>{t.projectName}</h3><p>{t.projectDescription}</p><div className="tags">{t.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="project-link" href="https://chatbot-ia-one.vercel.app/" target="_blank" rel="noreferrer">{t.openProject} <ArrowUpRight size={18}/></a></div></ProjectCard></Container></ProjectSection>
  <Contact id="contato"><Container className="row"><div><span className="label">{t.contact}</span><h2>{t.contactTitle}</h2></div><div className="contact-list"><a className="contact-item" href="mailto:augustof9@gmail.com"><span><Mail size={13}/> {t.email}</span><strong>augustof9@gmail.com</strong></a><a className="contact-item" href="https://www.linkedin.com/in/augusto-foss-silva-6053491ba/" target="_blank" rel="noreferrer"><span><ArrowUpRight size={13}/> {t.linkedin}</span><strong>Augusto Foss Silva</strong></a><div className="contact-item"><span><MapPin size={13}/> {t.factsLocation}</span><strong>Curitiba, {activeLanguage==='pt'?'Paraná':'Brazil'}</strong></div></div></Container></Contact>
  <Footer><Container className="row"><span>© 2026 Augusto Foss Silva</span><span>{t.footerRole}</span><span>{t.built}</span></Container></Footer></>
}
