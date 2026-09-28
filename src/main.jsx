import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Home, Search, MessageCircle, ShoppingBag, Wallet, MapPin, Bot,
  Bell, Settings, ChevronRight, Heart, MessageSquare, Share2,
  Play, ArrowUpRight, Download, LockKeyhole, Sparkles, Menu, X
} from 'lucide-react';
import './styles.css';

const nav = [
  ['Home', Home], ['Discover', Search], ['Chat', MessageCircle],
  ['Marketplace', ShoppingBag], ['Wallet', Wallet], ['Services', MapPin], ['Eazy Assist', Bot]
];

const categories = ['Phones & Tablets','Computers','Gaming','Fashion','Home & Living','Electronics','Vehicles','Services'];

function Mark({ compact=false }) {
  return <div className={'mark-wrap '+(compact?'compact':'')}>
    <svg className="mark" viewBox="0 0 100 100" aria-label="Eazy">
      <path d="M22 20h56l-13 12H38v10h24L49 54H38v14h28L53 80H22z" fill="currentColor"/>
      <path d="M53 20h25L64 32H39z" fill="#7DFFB5"/>
      <path d="M62 42h16L65 54H49z" fill="#B5FF55"/>
      <path d="M66 68h12L64 80H53z" fill="#7DFFB5"/>
    </svg>
    {!compact && <span>Eazy</span>}
  </div>
}

function App() {
  const [page,setPage] = useState('Home');
  const [mobileOpen,setMobileOpen] = useState(false);
  const [liked,setLiked] = useState(false);

  const go = p => { setPage(p); setMobileOpen(false); window.scrollTo({top:0,behavior:'smooth'}); };

  return <div className="app">
    <header className="topbar">
      <button className="brand-btn" onClick={()=>go('Home')}><Mark/></button>
      <div className="top-search"><Search size={17}/><input placeholder="Search Eazy..." onFocus={()=>go('Discover')}/><kbd>⌘ K</kbd></div>
      <div className="top-actions">
        <button aria-label="Notifications"><Bell size={19}/></button>
        <button aria-label="Messages" onClick={()=>go('Chat')}><MessageCircle size={19}/></button>
        <button className="avatar" onClick={()=>go('Profile')}>D</button>
        <button className="menu-btn" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
      </div>
    </header>

    <div className="layout">
      <aside className={'sidebar '+(mobileOpen?'open':'')}>
        <div className="mobile-nav-head"><Mark compact/><button onClick={()=>setMobileOpen(false)}><X/></button></div>
        <nav>{nav.map(([label,Icon])=><button key={label} className={page===label?'active':''} onClick={()=>go(label)}>
          <Icon size={19}/><span>{label}</span>{label==='Wallet'&&<LockKeyhole size={13} className="lock"/>}
        </button>)}</nav>
        <div className="side-bottom">
          <button onClick={()=>go('Profile')}><div className="avatar small">D</div><span>My profile</span></button>
          <button onClick={()=>go('Settings')}><Settings size={18}/><span>Settings</span></button>
        </div>
      </aside>

      <main className="main">{page==='Home'?<HomePage go={go} liked={liked} setLiked={setLiked}/>
        :page==='Discover'?<Discover/>
        :page==='Chat'?<Chat/>
        :page==='Marketplace'?<Marketplace/>
        :page==='Wallet'?<WalletPage/>
        :page==='Services'?<Services/>
        :page==='Eazy Assist'?<Assist/>
        :page==='Profile'?<Profile/>
        :<SettingsPage/>}</main>

      <aside className="rightbar">
        <div className="right-card">
          <p className="eyebrow">TRENDING ON EAZY</p>
          <h3>What people are discovering</h3>
          {['Tech & gadgets','Creative work','Gaming setups'].map((x,i)=><div className="trend" key={x}><span>0{i+1}</span><div><strong>{x}</strong><small>{(2+i)*1}.2k people exploring</small></div></div>)}
        </div>
        <div className="right-card soft"><Sparkles size={18}/><strong>Eazy Assist</strong><p>Get help finding, planning and getting things done.</p><button onClick={()=>go('Eazy Assist')}>Open Assist <ArrowUpRight size={14}/></button></div>
      </aside>
    </div>
    <footer><span>© 2026 Eazy</span><span>Privacy</span><span>Terms</span><span>Help</span></footer>
  </div>
}

function HomePage({go,liked,setLiked}) {
 return <div className="content">
   <section className="hero">
    <div className="hero-copy"><p className="eyebrow green">LIFE, IN ONE PLACE</p><h1>Your world,<br/><em>made easier.</em></h1><p>Connect with people, discover what matters, chat, shop and move through your digital life from one place.</p>
    <div className="hero-actions"><button className="primary" onClick={()=>go('Discover')}>Explore Eazy <ArrowUpRight size={17}/></button><button className="ghost" onClick={()=>go('Marketplace')}>Browse marketplace</button></div></div>
    <div className="hero-art"><div className="glow g1"/><div className="glow g2"/><div className="phone"><div className="phone-top"><Mark compact/><span>9:41</span><Bell size={12}/></div><div className="mini-welcome">Good evening,<br/><b>Draken.</b></div><div className="mini-card"><span>Wallet</span><strong>•••• ••••</strong><small>Open in app</small></div><div className="mini-feed"><div/><div/><div/></div></div></div>
   </section>
   <section className="section"><div className="section-head"><div><p className="eyebrow">THE EAZY ECOSYSTEM</p><h2>One place. Many ways to move.</h2></div></div>
   <div className="feature-grid">
    {[['Connect','People, conversations and communities without the noise.','01'],['Discover','Search the people, ideas and things worth finding.','02'],['Marketplace','Explore products and services from sellers on Eazy.','03'],['Eazy Assist','A helpful layer for planning, finding and getting things done.','04']].map(([t,d,n])=><article className="feature" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><ChevronRight size={17}/></article>)}
   </div></section>
   <section className="feed-card"><div className="post-head"><div className="avatar">D</div><div><strong>Draken</strong><small>Just now · Eazy</small></div><button>•••</button></div><p>Building a calmer way to connect everything. 🌿</p><div className="post-visual"><Mark compact/><span>EAZY</span></div><div className="post-actions"><button onClick={()=>setLiked(!liked)} className={liked?'liked':''}><Heart size={18} fill={liked?'currentColor':'none'}/>{liked?'Liked':'Like'}</button><button><MessageSquare size={18}/> Comment</button><button><Share2 size={18}/> Share</button></div></section>
   <section className="cta"><p className="eyebrow green">EAZY WEB</p><h2>The social side of Eazy,<br/>right in your browser.</h2><p>Use Eazy on your desktop for conversations, discovery and marketplace browsing. Your wallet stays safely inside the mobile app.</p><button className="primary" onClick={()=>go('Wallet')}>See how Wallet works <ArrowUpRight size={17}/></button></section>
 </div>
}

function Discover(){return <div className="content"><PageTitle kicker="DISCOVER" title="Find what matters." text="Search people, posts, products and services across Eazy."/><div className="discover-search"><Search/><input autoFocus placeholder="Search people, products, posts and services..."/></div><div className="chips">{['People','Posts','Marketplace','Services'].map(x=><button key={x}>{x}</button>)}</div><div className="discover-grid">{['Creative technology','Gaming','Fashion','Local services','Startups','Music'].map((x,i)=><div className="discover-tile" key={x}><span>0{i+1}</span><h3>{x}</h3><ArrowUpRight/></div>)}</div></div>}

function Chat(){return <div className="content"><PageTitle kicker="CHAT" title="Keep the conversation moving." text="Messages, communities and people you care about, together."/><div className="chat-layout"><div className="chat-list">{['Maya','Eazy Marketplace','Dev Circle','Alex'].map((x,i)=><button key={x} className={i===0?'selected':''}><div className="avatar">{x[0]}</div><div><strong>{x}</strong><small>{i?'New activity':'You: let’s build it.'}</small></div><span>{i===0?'2':''}</span></button>)}</div><div className="chat-empty"><MessageCircle size={30}/><h3>Your conversations</h3><p>Select a conversation to start chatting.</p></div></div></div>}

function Marketplace(){return <div className="content"><PageTitle kicker="MARKETPLACE" title="Discover more." text="Products and services from people and businesses on Eazy."/><div className="market-cats">{categories.map((x,i)=><button key={x}><div className={'cat c'+i}><span>{String(i+1).padStart(2,'0')}</span></div><strong>{x}</strong></button>)}</div><div className="section-head market-head"><h2>Featured on Eazy</h2><button className="text-btn">View all <ArrowUpRight size={14}/></button></div><div className="products">{['Studio headphones','Everyday carry','Desk setup'].map((x,i)=><article className="product" key={x}><div className="product-img"><span>E</span></div><div><small>Featured</small><h3>{x}</h3><strong>Explore listing</strong></div></article>)}</div></div>}

function WalletPage(){return <div className="content"><div className="locked"><div className="lock-orb"><LockKeyhole size={27}/></div><p className="eyebrow green">EAZY WALLET</p><h1>Your money stays<br/><em>in the app.</em></h1><p>Wallet, transfers and financial actions are available in the Eazy mobile app, where the full secure experience lives.</p><button className="primary"><Download size={17}/> Open in Eazy app</button><small>Don't have Eazy yet? Download the mobile app to get started.</small></div></div>}

function Services(){return <div className="content"><PageTitle kicker="SERVICES" title="Things around you." text="Explore places, services and useful experiences through Eazy."/><div className="service-grid">{['Nearby','Food & places','Transport','Local services'].map((x,i)=><div className="service" key={x}><MapPin/><span>0{i+1}</span><h3>{x}</h3><p>Discover what is around you.</p></div>)}</div></div>}

function Assist(){return <div className="content"><div className="assist-hero"><Bot size={28}/><p className="eyebrow green">EAZY ASSIST</p><h1>What are you trying<br/><em>to get done?</em></h1><p>Ask Eazy Assist to help you plan, find, compare or understand something.</p><div className="assist-input"><input placeholder="Ask Eazy Assist..."/><button><ArrowUpRight/></button></div></div><div className="chips">{['Plan my week','Find a laptop','Explain something','Find nearby places'].map(x=><button key={x}>{x}</button>)}</div></div>}

function Profile(){return <div className="content"><div className="profile-head"><div className="avatar xl">D</div><div><p className="eyebrow">PROFILE</p><h1>Draken</h1><p>@draken · Building Eazy</p></div><button className="ghost">Edit profile</button></div><div className="profile-stats"><div><strong>0</strong><span>Posts</span></div><div><strong>0</strong><span>Followers</span></div><div><strong>0</strong><span>Following</span></div></div></div>}

function SettingsPage(){return <div className="content"><PageTitle kicker="SETTINGS" title="Your Eazy." text="Manage your account and preferences."/><div className="settings-list">{['Account','Notifications','Privacy & security','Appearance','Help & support'].map(x=><button key={x}><span>{x}</span><ChevronRight/></button>)}</div></div>}

function PageTitle({kicker,title,text}){return <div className="page-title"><p className="eyebrow green">{kicker}</p><h1>{title}</h1><p>{text}</p></div>}

createRoot(document.getElementById('root')).render(<App/>);