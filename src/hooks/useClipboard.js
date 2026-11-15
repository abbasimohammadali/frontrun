import { useState } from 'react';

export default function useClipboard() {
  const [status, setStatus] = useState('');

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Copied!');
    } catch {
      setStatus('Copy unavailable — select the code manually.');
    }
  }

  return { copy, status };
}
