import {
  BadgeCheck, BookOpen, Briefcase, Brush, Calendar, ChartBar, ChartLine, Clock, Cloud, CodeXml, Cpu,
  Database, Eye, FileText, Film, Gauge, Globe, Hash, Headphones, Heart, Image, Layers, LayoutDashboard,
  LayoutTemplate, Lightbulb, Link2, Lock, Mail, MapPin, Megaphone, MessageCircle, Monitor,
  MonitorSmartphone, MousePointerClick, Newspaper, Palette, PenLine, PenTool, Percent, Plane, Receipt,
  RefreshCcw, Rocket, Search, SearchCheck, Server, Share2, ShieldCheck, ShoppingBag, ShoppingCart,
  Smartphone, Sparkles, Store, Target, TrendingUp, Users, Video, Wallet, Workflow, Wrench, Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BadgeCheck, BookOpen, Briefcase, Brush, Calendar, ChartBar, ChartLine, Clock, Cloud, CodeXml, Cpu,
  Database, Eye, FileText, Film, Gauge, Globe, Hash, Headphones, Heart, Image, Layers, LayoutDashboard,
  LayoutTemplate, Lightbulb, Link2, Lock, Mail, MapPin, Megaphone, MessageCircle, Monitor,
  MonitorSmartphone, MousePointerClick, Newspaper, Palette, PenLine, PenTool, Percent, Plane, Receipt,
  RefreshCcw, Rocket, Search, SearchCheck, Server, Share2, ShieldCheck, ShoppingBag, ShoppingCart,
  Smartphone, Sparkles, Store, Target, TrendingUp, Users, Video, Wallet, Workflow, Wrench, Zap,
};

export default function Icon({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const C = icons[name] ?? Sparkles;
  return <C size={size} className={className} aria-hidden="true" strokeWidth={2} />;
}

/** Gradient icon tile used across service cards. */
export function IconTile({ name, gradient, size = 52 }: { name: string; gradient: [string, string]; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center text-white"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.31,
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
        boxShadow: `0 10px 20px ${gradient[1]}4d`,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.44)} />
    </span>
  );
}
