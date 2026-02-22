interface TokenNameProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TokenName: React.FC<TokenNameProps> = ({ name, size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2',
  };

  const fontSizes = {
    sm: 'var(--text-label)',
    md: 'var(--text-body)',
    lg: 'var(--text-subtitle)',
  };

  return (
    <div
      className={`inline-block bg-muted-foreground/10 border border-border ${sizeClasses[size]}`}
      style={{
        fontFamily: 'var(--font-family-nobel)',
        fontSize: fontSizes[size],
        fontWeight: 'var(--font-weight-book)',
        borderRadius: 'var(--radius)',
      }}
    >
      <span className="text-foreground">{name}</span>
    </div>
  );
};
