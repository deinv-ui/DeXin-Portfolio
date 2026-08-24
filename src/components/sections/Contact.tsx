import { useEffect, useRef, useState, type FormEvent } from "react";
import { channels, site, type Channel } from "../../data/site";
import { copyText } from "../../lib/clipboard";
import { useToastStore } from "../../stores/toastStore";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

const FORM_ENDPOINT = "https://formspree.io/f/mblwdbkk";

export function Contact() {
  return (
    <Section id="contact" label="Contact" tick="accent2">
      <h2 className="mb-5 text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[.98] tracking-[-.035em] [font-stretch:110%]">
        Got something
        <br />
        worth building?
      </h2>
      <p className="prose">
        Email reaches me fastest &mdash; a line about what you&rsquo;re making and where
        it&rsquo;s stuck is plenty to start. WhatsApp works too if you&rsquo;d rather just talk,
        and the form below lands in the same inbox.
      </p>

      <Channels />
      <ContactForm />
    </Section>
  );
}

function Channels() {
  return (
    <div className="mt-10 flex flex-col border-t border-rule">
      {channels.map((channel) => (
        <ChannelRow key={channel.label} channel={channel} />
      ))}
    </div>
  );
}

function ChannelRow({ channel }: { channel: Channel }) {
  const external = !channel.href.startsWith("mailto:");

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-rule py-[1.1rem] sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-6">
      <span className="mono hidden sm:block">{channel.label}</span>
      <a
        href={channel.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="border-b border-transparent text-[clamp(1rem,2vw,1.25rem)] font-medium tracking-[-.015em] no-underline transition-[border-color,color] duration-[180ms] [overflow-wrap:anywhere] hover:border-accent hover:text-accent"
      >
        {channel.value}
      </a>
      {channel.action === "copy" ? (
        <CopyButton value={channel.value} />
      ) : (
        <span className="mono">{channel.action} &#8599;</span>
      )}
    </div>
  );
}

function CopyButton({ value }: { value: string }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2600);
    return () => window.clearTimeout(timer);
  }, [state]);

  const onCopy = async () => {
    setState((await copyText(value)) ? "done" : "failed");
  };

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        className={`mono cursor-pointer border bg-transparent px-[.7rem] py-2 text-[.625rem] tracking-[.12em] transition-[border-color,color] duration-[180ms] ${
          state === "done"
            ? "border-jade text-jade"
            : "border-rule text-muted hover:border-accent hover:text-accent"
        }`}
      >
        {state === "done" ? "Copied" : "Copy"}
      </button>
      <p className="mono sr-only col-span-full" aria-live="polite">
        {state === "done"
          ? "Address copied to your clipboard."
          : state === "failed"
            ? `Couldn't reach the clipboard — the address is ${value}.`
            : ""}
      </p>
    </>
  );
}

type Status = "idle" | "sending" | "sent";

function ContactForm() {
  const showToast = useToastStore((s) => s.showToast);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);

      form.reset();
      setStatus("sent");
      showToast("Message sent — I'll get back to you.", "success");
    } catch {
      setStatus("idle");
      showToast("Something went wrong. Email me directly instead.", "error");
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mt-12 border border-rule bg-panel p-[clamp(1.25rem,2.5vw,1.75rem)]">
      <p className="mono mb-5 border-b border-rule pb-[.85rem]">Or send it straight from here</p>

      <div className="flex flex-col gap-4">
        <Field name="name" label="Name" type="text" autoComplete="name" />
        <Field name="email" label="Email" type="email" autoComplete="email" />

        <label className="flex flex-col gap-2">
          <span className="mono">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="resize-y border border-rule bg-panel-hi px-3 py-[.7rem] text-[.9375rem] text-ink outline-none transition-colors duration-[180ms] placeholder:text-muted focus:border-accent"
          />
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" variant="solid" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
          {status === "sent" && (
            <span className="mono text-jade">Sent — thanks.</span>
          )}
        </div>
      </div>

      <p className="mono mt-5 opacity-55">
        Goes to {site.email} via Formspree. No newsletter, no list.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  autoComplete,
}: {
  name: string;
  label: string;
  type: "text" | "email";
  autoComplete: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="border border-rule bg-panel-hi px-3 py-[.7rem] text-[.9375rem] text-ink outline-none transition-colors duration-[180ms] placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}
