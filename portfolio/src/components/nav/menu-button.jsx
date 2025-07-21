import { useState } from 'react';

function MenuButton({ active, setActive }) {
  const toggleActive = () => {
    setActive(active => !active);
  };

  return (
    <button
      type="button"
      aria-label={active ? "Close menu" : "Open menu"}
      aria-expanded={active}
      className="h-full flex flex-col items-center justify-center px-8 cursor-pointer"
      onClick={toggleActive}
    >
      <div class={`bar1 ${active ? 'rotate-45 translate-y-3.5' : ''}`}></div>
      <div class={`bar2 ${active ? 'opacity-0' : ''}`}></div>
      <div class={`bar3 ${active ? '-rotate-45 -translate-y-3.5' : ''}`}></div>
    </button>
  );
}

export default MenuButton;
