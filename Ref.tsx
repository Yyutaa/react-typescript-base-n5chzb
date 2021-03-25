import React, { useRef } from "react";

const TextInputWithFocusButton = () => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <>
      <input ref={ref} />
      <button onClick={() => ref?.current?.focus()}>聚焦</button>
    </>
  );
}

export default TextInputWithFocusButton;