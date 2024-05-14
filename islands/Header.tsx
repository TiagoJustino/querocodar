import BlogTitle from "../components/BlogTitle.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import { useState } from "preact/hooks"

interface HeaderProps {
    title: string;
    active: string;
}

export default function Header(props: HeaderProps) {
  const [state, setState] = useState({lang: 'br'});
  const isHome = props.active == "/";
  return (
    <div>
      <header class="mx-auto max-w-screen-lg flex gap-3 justify-between">
          <div class="flex items-center">
            <Logo disabled={isHome} />
            <BlogTitle title={props.title} disabled={isHome} />
          </div>
        <NavigationBar class="hidden md:flex" active={props.active} state={state} setState={setState} />
      </header>
      <NavigationBar class="md:hidden pb-3" active={props.active} state={state} setState={setState} />
    </div>
  );
}

function Logo(props: { disabled: boolean }) {
  return props.disabled ? (
    <span class="flex mr-3 items-center">
      <img src="/logo.jpg" alt="Letters T and J" width={40} height={40} />
    </span>
  ) : (
    <a href="/" class="flex mr-3 items-center">
      <img src="/logo.jpg" alt="Letters T and J" width={40} height={40} />
    </a>
  );
}
