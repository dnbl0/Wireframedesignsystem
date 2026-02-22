import { TokenName } from './TokenName';

interface PrimitiveFontSizeToken {
  name: string;
  value: number;
  rem: number;
  description: string;
}

interface PrimitiveFontSizeTableProps {
  tokens: PrimitiveFontSizeToken[];
}

export const PrimitiveFontSizeTable: React.FC<PrimitiveFontSizeTableProps> = ({ tokens }) => {
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
              Font size
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={token.name}
              className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
              }`}
            >
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: `${token.value}px`,
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  Aa
                </span>
              </td>
              <td className="px-6 py-5">
                <TokenName name={token.name} size="sm" />
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
                  {token.rem} rem / {token.value} px
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface PrimitiveFontWeightToken {
  name: string;
  value: number;
  description: string;
}

interface PrimitiveFontWeightTableProps {
  tokens: PrimitiveFontWeightToken[];
}

export const PrimitiveFontWeightTable: React.FC<PrimitiveFontWeightTableProps> = ({ tokens }) => {
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
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={token.name}
              className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
              }`}
            >
              <td className="px-6 py-5">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-h2)',
                    fontWeight: token.value,
                  }}
                  className="text-foreground"
                >
                  Aa
                </span>
              </td>
              <td className="px-6 py-5">
                <TokenName name={token.name} size="sm" />
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
                  {token.value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface PrimitiveLineHeightToken {
  name: string;
  value: number;
  rem: number;
  description: string;
}

interface PrimitiveLineHeightTableProps {
  tokens: PrimitiveLineHeightToken[];
}

export const PrimitiveLineHeightTable: React.FC<PrimitiveLineHeightTableProps> = ({ tokens }) => {
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
              Line height
            </th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={token.name}
              className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
              }`}
            >
              <td className="px-6 py-5">
                <div
                  style={{
                    lineHeight: `${token.value}px`,
                    borderTop: '1px solid var(--color-border)',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'inline-block',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-book)',
                    }}
                    className="text-foreground"
                  >
                    Line
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <TokenName name={token.name} size="sm" />
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
                  {token.rem} rem / {token.value} px
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
