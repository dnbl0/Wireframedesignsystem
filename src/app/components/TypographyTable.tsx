import { TokenName } from './TokenName';

interface TypographyToken {
  token: string;
  fontWeight: string;
  fontWeightValue: number;
  fontSize: string;
  fontSizeValue: number;
  lineHeight: string;
  lineHeightValue: number;
  description: string;
}

interface TypographyTableProps {
  tokens: TypographyToken[];
}

export const TypographyTable: React.FC<TypographyTableProps> = ({ tokens }) => {
  return (
    <div
      style={{ borderRadius: 'var(--radius-card)' }}
      className="bg-card border border-border overflow-hidden"
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-left px-6 py-4 text-foreground uppercase tracking-wider"
            >
              Preview
            </th>
            <th
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-left px-6 py-4 text-foreground uppercase tracking-wider"
            >
              Token
            </th>
            <th
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-left px-6 py-4 text-foreground uppercase tracking-wider"
            >
              Font weight
            </th>
            <th
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-left px-6 py-4 text-foreground uppercase tracking-wider"
            >
              Font size
            </th>
            <th
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-left px-6 py-4 text-foreground uppercase tracking-wider"
            >
              Line height
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={token.token}
              className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
              }`}
            >
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: `${token.fontSizeValue}px`,
                    fontWeight: token.fontWeightValue,
                    lineHeight: `${token.lineHeightValue}px`,
                  }}
                  className="text-foreground"
                >
                  Aa
                </span>
              </td>
              <td className="px-6 py-5">
                <TokenName name={token.token} size="sm" />
              </td>
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  {token.fontWeight}
                </span>
              </td>
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  {token.fontSize}
                </span>
              </td>
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  {token.lineHeight}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
