import {
  ATTACHMENTS_DB_NAME,
  ATTACHMENTS_DB_VERSION,
  ATTACHMENTS_STORE_NAME,
} from "@/lib/admin/storage-keys";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(ATTACHMENTS_DB_NAME, ATTACHMENTS_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(ATTACHMENTS_STORE_NAME)) {
        db.createObjectStore(ATTACHMENTS_STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function putAttachment(id: string, file: File): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(ATTACHMENTS_STORE_NAME, "readwrite");
    tx.objectStore(ATTACHMENTS_STORE_NAME).put(file, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export async function getAttachment(id: string): Promise<File | Blob | undefined> {
  const db = await openDb();
  const result = await new Promise<File | Blob | undefined>((resolve, reject) => {
    const tx = db.transaction(ATTACHMENTS_STORE_NAME, "readonly");
    const request = tx.objectStore(ATTACHMENTS_STORE_NAME).get(id);
    request.onsuccess = () => resolve(request.result as File | Blob | undefined);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return result;
}

export async function deleteAttachments(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(ATTACHMENTS_STORE_NAME, "readwrite");
    const store = tx.objectStore(ATTACHMENTS_STORE_NAME);
    for (const id of ids) store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}
