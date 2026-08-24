import populer from "../assets/populer.jpg";
import jouku from "../assets/jouku.jpg";
import watch from "../assets/watch.png";

export type Project = {
  id: string;
  /** "live" reads as product work; "lab" as a personal project. */
  kind: "live" | "lab";
  kindLabel: string;
  title: string;
  /** Short mono caption sitting beside the description. */
  caption: string;
  description: string;
  image: string;
  /** Alt text carries the actual screen contents, not just the product name. */
  alt: string;
  width: number;
  height: number;
  /** Shown in the browser chrome above the screenshot. */
  url: string;
  href: string;
  source?: string;
};

export const projects: Project[] = [
  {
    id: "populer",
    kind: "live",
    kindLabel: "Product work — live",
    title: "Populer",
    caption: "A professional content network",
    description:
      "A category-filtered discovery feed carrying mixed media — articles, video, image posts — alongside publisher profiles, messaging and posting. The interesting constraint is that a feed like this has to stay quick to scan as the catalogue grows, so layout density and image handling matter more than any single screen does.",
    image: populer,
    alt: "The Populer web app: a left sidebar with Explore, Following, Messages and Profile, a row of category tabs, and a mixed-media discovery feed of posts from companies and publishers.",
    width: 1120,
    height: 541,
    url: "www.populer.com",
    href: "https://www.populer.com/",
  },
  {
    id: "jouku",
    kind: "live",
    kindLabel: "Product work — live",
    title: "Jouku",
    caption: "End-to-end talent acquisition",
    description:
      "Sourcing, self-scheduled phone interviews, per-recruiter analytics and offer signing, joined into one flow. Hiring software lives or dies on state: an application moves through a lot of hands, and the UI has to keep every one of them looking at the same truth.",
    image: jouku,
    alt: "The Jouku marketing site: a Candidate sourcing headline over floating product panels showing recruiter interview analytics, a phone-interview self-scheduling picker and an acceptance-offer signature pad.",
    width: 1120,
    height: 523,
    url: "www.jouku.com",
    href: "https://www.jouku.com/",
  },
  {
    id: "watch",
    kind: "lab",
    kindLabel: "Personal project",
    title: "Watch",
    caption: "Portfolio tracking dashboard",
    description:
      "Search a symbol, pin it to the board, and read open / high / low against the previous close on a per-ticker chart. Built to get properly comfortable with live market data, chart rendering and a card grid that stays readable whether it holds three tickers or thirty.",
    image: watch,
    alt: "Watch, a portfolio dashboard: a sidebar with Portfolio, Analysis, Organize and Import, a total portfolio value of $141,126.20 up 0.61% today, an intraday line chart, and stat cards for day change, total return, cash available and best performer.",
    width: 1497,
    height: 686,
    url: "fastdashboarddeploy.vercel.app",
    href: "https://fastdashboarddeploy.vercel.app/",
    source: "https://github.com/deinv-ui/fast_dashboard",
  },
];
