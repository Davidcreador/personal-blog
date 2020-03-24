import react from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
