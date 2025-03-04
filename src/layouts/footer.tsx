import Icon from '@/components/ui/icon';
import { footerItems, socials } from '@/lib/constant/app.constant';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full p-3 border-t dark:border-t-[#1E293B] border-t-[#E2E8F0] dark:bg-[#020817] flex md:flex-row flex-col items-center justify-between md:h-20 gap-4 px-4 md:px-8">
      <ul className="flex items-center text-sm text-[#64748B] dark:text-[#94A3B8] font-medium gap-2">
        {footerItems.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className="px-2 hover:text-[#475569] dark:hover:text-slate-300 transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center md:gap-4 gap-3">
        <div className="flex items-center gap-2 text-[#64748B] dark:text-slate-400">
          {socials.map((social, i) => (
            <Link
              key={i}
              href={social.href}
              className="p-2 rounded-full border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all hover:scale-105"
              aria-label={`Visit our ${social.icon}`}
            >
              <Icon icon={social.icon} className="w-4 h-4" />
            </Link>
          ))}
        </div>
        <p className="text-[#64748B] dark:text-slate-400 text-sm">
          © 2024 100xJobs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;