// Global MDX element overrides. Required by @next/mdx in the App Router.

const components = {
  a: ({ href = "", ...props }) => {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="link"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
};

export function useMDXComponents(inherited) {
  return { ...inherited, ...components };
}
