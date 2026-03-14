import 'vitest-canvas-mock';

// Stub ResizeObserver used by Chart.js for responsive charts (not implemented in jsdom).
if (typeof ResizeObserver === 'undefined') {
  (window as Window & typeof globalThis & { ResizeObserver: unknown }).ResizeObserver = class {
    observe() { /* no-op */ }
    unobserve() { /* no-op */ }
    disconnect() { /* no-op */ }
  };
}

// Provide browser APIs expected by UI libraries when running in jsdom.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => { /* no-op */ },
      removeListener: () => { /* no-op */ },
      addEventListener: () => { /* no-op */ },
      removeEventListener: () => { /* no-op */ },
      dispatchEvent: () => false,
    }),
  });
}
