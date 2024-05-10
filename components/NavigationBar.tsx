import BrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx'
import BrandLinkedin from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx'
import BrandFacebook from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-facebook.tsx'
import BrandInstagram from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-instagram.tsx'
import BrandYoutube from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-youtube.tsx'

interface Item {
  name: string;
  href: string;
}

interface NavigationBarProps {
  active: string;
  class?: string;
  state: {
    lang: string;
  }
  setState: Function;
}

export default function NavigationBar(props: NavigationBarProps) {
  /*
  const items = [
    {
      name: 'Showcase',
      href: '/showcase',
    },
    {
      name: 'Blog',
      href: '/blog/introduction',
    },
  ]
   */
  const items: Item[] = [];
  const propClass = props.class ?? '';
  return (
      <nav class={'flex ' + propClass}>
        <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
          {items.map((item) => (
              <li>
                <a
                    href={item.href}
                    className={`p-2 text-white hover:underline ${
                        props.active == item.href ? 'font-bold' : ''
                    }`}
                >
                  {item.name}
                </a>
              </li>
          ))}

          <li className="flex items-center">
            <a
                href="http://www.linkedin.com/in/tiago-justino"
                className="hover:text-tiago-gray text-tiago-white inline-block"
            >
              <BrandLinkedin/>
            </a>
          </li>
          <li className="flex items-center">
            <a
                href="https://github.com/tiagojustino"
                className="hover:text-tiago-gray text-tiago-white inline-block"
            >
              <BrandGithub/>
            </a>
          </li>
          <li className="flex items-center">
            <a
                href="http://www.facebook.com/tiagovmjustino"
                className="hover:text-tiago-gray text-tiago-white inline-block"
            >
              <BrandFacebook/>
            </a>
          </li>
          <li className="flex items-center">
            <a
                href="https://www.instagram.com/tiagovmjustino"
                className="hover:text-tiago-gray text-tiago-white inline-block"
            >
              <BrandInstagram/>
            </a>
          </li>
          <li className="flex items-center">
            <a
                href="https://www.youtube.com/@TiagoJustinoVM"
                className="hover:text-tiago-gray text-tiago-white inline-block"
            >
              <BrandYoutube/>
            </a>
          </li>
        </ul>
      </nav>
  )
}
