import { useState } from "react";

/**
 * Custom hook for copying text to clipboard with a temporary notification
 * @param timeout Duration in milliseconds for the notification to show
 * @returns Tuple containing [copied text label, copy function]
 */
const useClipboard = (timeout: number = 2000) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), timeout);
    });
  };

  return { copiedText, copyToClipboard };
};

export default useClipboard;
