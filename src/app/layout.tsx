import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';
export const metadata:Metadata={title:{default:'Sanguosha Academy — Learn Three Kingdoms Kill',template:'%s | Sanguosha Academy'},description:'A free, beginner-friendly English guide to Three Kingdoms Kill (Sanguosha): classic identity mode rules, generals, cards, interactive tutorials and quizzes.',openGraph:{title:'Sanguosha Academy',description:'Learn Three Kingdoms Kill in English.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
