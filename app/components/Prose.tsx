import type { Block } from "@/lib/blog";

export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-w">
      {blocks.map((b, i) =>
        b.t === "h2" ? (
          <h2 key={i}>{b.text}</h2>
        ) : b.t === "ul" ? (
          <ul key={i}>
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{b.text}</p>
        ),
      )}
    </div>
  );
}
