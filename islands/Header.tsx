import BlogTitle from "../components/BlogTitle.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import { useState } from "preact/hooks"

interface HeaderProps {
    title: string;
    active: string;
}

export default function Header(props: HeaderProps) {
  const [state, setState] = useState({lang: 'en'});
  const isHome = props.active == "/";
  return (
    <div>
      <header
        class={
          "mx-auto max-w-screen-lg flex gap-3 " +
          (isHome ? "justify-end" : "justify-between")
        }
      >
        {!isHome && (
          <div class="p-4 flex items-center">
            <Logo />
            <BlogTitle title={props.title} />
          </div>
        )}
        <NavigationBar class="hidden md:flex" active={props.active} state={state} setState={setState} />
      </header>
      <NavigationBar class="md:hidden pb-3" active={props.active} state={state} setState={setState} />
    </div>
  );
}

function Logo() {
  return (
    <a href="/static" class="flex mr-3 items-center">
      <img src="/logo.jpg" alt="Letters T and J" width={40} height={40} />
    </a>
  );
}
