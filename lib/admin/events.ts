/** Same-tab + cross-tab pub/sub for admin storage changes.
 * Same tab: a CustomEvent (native `storage` events never fire in the tab that wrote).
 * Other tabs: the native `storage` event, matched by key. */

const EVENT_PREFIX = "bellery-admin:";

export type AdminTopic = "session" | "submissions" | "product-overrides";

export function emit(topic: AdminTopic): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EVENT_PREFIX + topic));
}

export function subscribe(
  topic: AdminTopic,
  key: string,
  callback: () => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const handleCustomEvent = () => callback();
  const handleStorageEvent = (e: StorageEvent) => {
    if (e.key === null || e.key === key) callback();
  };

  window.addEventListener(EVENT_PREFIX + topic, handleCustomEvent);
  window.addEventListener("storage", handleStorageEvent);

  return () => {
    window.removeEventListener(EVENT_PREFIX + topic, handleCustomEvent);
    window.removeEventListener("storage", handleStorageEvent);
  };
}
