import React, { memo } from "react";

interface HighlightTextProps {
  text: string;
  target: string;
}

export const HighlightText = memo((props: HighlightTextProps) => {
  const { text, target } = props;

  const parts = text.split(new RegExp(`(${target})`, "gi"));

  return (
    <div>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === target.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </div>
  );
});
