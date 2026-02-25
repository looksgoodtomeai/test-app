import { ReactNode, CSSProperties } from "react";

interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
  width?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
}

export function Table<T>({ columns, data, onRowClick, emptyMessage = "No data" }: TableProps<T>) {
  const cellStyle: CSSProperties = { padding: "12px 16px", textAlign: "left", borderBottom: "1px solid #f3f4f6" };

  return (
    <div style={{ overflow: "auto", borderRadius: 12, border: "1px solid #e5e7eb", background: "#fff" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {columns.map((col) => (
              <th key={col.key} style={{ ...cellStyle, fontSize: "0.8rem", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan={columns.length} style={{ ...cellStyle, textAlign: "center", color: "#9ca3af", padding: 40 }}>{emptyMessage}</td></tr>
          ) : (
            data.map((item, i) => (
              <tr key={i} onClick={() => onRowClick?.(item)} style={{ cursor: onRowClick ? "pointer" : undefined, transition: "background 0.1s" }}>
                {columns.map((col) => (
                  <td key={col.key} style={cellStyle}>{col.render(item)}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
