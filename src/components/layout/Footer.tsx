import { site } from "../../data/site";
import { Wrap } from "./Wrap";

export function Footer() {
  return (
    <Wrap as="footer" className="border-t border-rule pb-14 pt-10">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold leading-none tracking-[-.03em] [font-stretch:114%]">
            {site.signature}
          </p>
          <p className="mono mt-[.6rem]">
            {site.name} &mdash; {site.role.toLowerCase()}
          </p>
        </div>

        <div className="flex flex-col gap-[.45rem] text-left sm:items-end sm:text-right">
          <p className="mono">&copy; {new Date().getFullYear()} {site.name}</p>
          <p className="mono opacity-55">Set in Archivo, Newsreader &amp; IBM Plex Mono</p>
        </div>
      </div>
    </Wrap>
  );
}
