import { useCallback } from "react";

const useKeyboardNavigation = () => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    const form = target.form;
    if (!form) return;

    // Get all focusable inputs, textareas, buttons in form
    const focusable = Array.from(form.elements).filter(
      (el) =>
        el instanceof HTMLElement &&
        !el.hasAttribute("disabled") &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "BUTTON")
    ) as HTMLElement[];

    const index = focusable.indexOf(target);

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (index === focusable.length - 2) {
          // last input: focus submit button (do NOT submit form here)
          const submitBtn = focusable[focusable.length - 1];
          submitBtn.focus();
        } else {
          // else focus next element
          const next = focusable[index + 1];
          next?.focus();
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        if (index < focusable.length - 1) {
          focusable[index + 1]?.focus();
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          focusable[index - 1]?.focus();
        }
        break;

      default:
        break;
    }
  }, []);

  return { handleKeyDown };
};

export default useKeyboardNavigation;
