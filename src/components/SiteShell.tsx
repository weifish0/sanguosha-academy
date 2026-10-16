'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BookOpen, BookMarked, Layers, Users, Swords, CircleHelp, Menu, X, ChevronRight, GraduationCap } from 'lucide-react';

const navigation=[
  {href:'/',label:'Home',icon:BookOpen},
  {href:'/rules',label:'Rules',icon:BookMarked},
  {href:'/characters',label:'Characters',icon:Users},
  {href:'/cards',label:'Cards',icon:Layers},
  {href:'/tutorial',label:'Tutorial',icon:Swords},
  {href:'/quiz',label:'Quiz',icon:CircleHelp}
];

function Brand(){return <Link href="/" className="brand" aria-label="Sanguosha Academy Home"><span className="brand-chinese">三國殺</span><span className="brand-sub">SANGUOSHA <b>ACADEMY</b></span></Link>}

export function SiteShell({children}:{children:React.ReactNode}){
 const pathname=usePathname(); const [menu,setMenu]=useState(false);
 const active=(href:string)=>href==='/'?pathname==='/':pathname===href||pathname.startsWith(href+'/');
 return <div className="site-shell">
  <header className="header"><div className="header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><Link className={active(n.href)?'nav-link active':'nav-link'} key={n.href} href={n.href}>{n.label}</Link>)}</nav><div className="header-right"><span className="lang-label">EN <span aria-hidden="true">·</span> 中文 names</span><button className="icon-button mobile-menu-button" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X size={22}/>:<Menu size={22}/>}</button></div></div></header>
  {menu&&<div className="menu-cover" onClick={()=>setMenu(false)}><aside className="mobile-drawer" onClick={e=>e.stopPropagation()}><div className="drawer-heading"><Brand/><button className="icon-button" aria-label="Close menu" onClick={()=>setMenu(false)}><X/></button></div>{navigation.map(n=><Link href={n.href} key={n.href} onClick={()=>setMenu(false)} className={active(n.href)?'drawer-link active':'drawer-link'}><n.icon size={21}/>{n.label}<ChevronRight size={16}/></Link>)}<p className="drawer-caption">A fan-made English learning guide. Not affiliated with any game publisher.</p></aside></div>}
  <main id="main">{children}</main>
  <footer className="footer"><div className="container footer-inner"><Brand/><p>Learn the ancient art of strategy, one card at a time.</p><div><Link href="/rules">Rules</Link><Link href="/characters">Generals</Link><Link href="/cards">Cards</Link></div><small>Independent, unofficial educational project. Original AI-generated illustrations.</small></div></footer>
  <nav className="bottom-nav" aria-label="Mobile navigation">{[navigation[0],navigation[1],navigation[2],navigation[3],navigation[4]].map(n=><Link key={n.href} href={n.href} aria-current={active(n.href)?'page':undefined} className={active(n.href)?'bottom-item active':'bottom-item'}><n.icon size={20} strokeWidth={active(n.href)?2.4:1.75}/><span>{n.label}</span></Link>)}<Link href="/quiz" aria-label="Quiz" className={active('/quiz')?'bottom-item active':'bottom-item'}><GraduationCap size={20} strokeWidth={1.8}/><span>Quiz</span></Link></nav>
 </div>
}
