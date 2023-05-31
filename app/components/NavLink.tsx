import Link from 'next/link';

interface NavLinkProps {
  href: string;
  link: string;
}

export default function NavLink({ href, link }: NavLinkProps) {
    return (
      <li className="mx-4 my-6 md:my-0 capitalize">
        <Link href={href} className="text-xl hover:text-dorado duration-500">{link}</Link>
      </li>
    );
  }
