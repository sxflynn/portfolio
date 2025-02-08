type ExternalLinkProps = {
  children: React.ReactNode;
  newTab?: boolean;
  to: string;
};

const isUrlValid = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const ExternalLink = ({ to, children, newTab = true }: ExternalLinkProps) => {
  if (!isUrlValid(to)) {
    throw new Error(`Invalid URL passed to ExternalLink: ${to}`);
  }

  return (
    <a
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};
export default ExternalLink;
