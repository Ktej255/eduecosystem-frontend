const DB_NAME = "EduecosystemVault";
const STORE_NAME = "secure_content";
const DB_VERSION = 1;

export type VaultItem = {
    id: string;
    type: "pdf" | "drill" | "video";
    title: string;
    content: string | Blob; // Encrypted string or raw blob
    timestamp: number;
};

class OfflineVaultService {
    private dbPromise: Promise<IDBDatabase>;

    constructor() {
        this.dbPromise = new Promise((resolve, reject) => {
            if (typeof window === "undefined") return; // SSR check

            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => reject("Vault DB error");
            request.onsuccess = () => resolve(request.result);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: "id" });
                }
            };
        });
    }

    async saveToVault(item: VaultItem): Promise<void> {
        const db = await this.dbPromise;
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], "readwrite");
            const store = transaction.objectStore(STORE_NAME);
            const request = store.put(item);

            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to save to vault");
        });
    }

    async getFromVault(id: string): Promise<VaultItem | undefined> {
        const db = await this.dbPromise;
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], "readonly");
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Failed to get from vault");
        });
    }

    async listVaultItems(): Promise<VaultItem[]> {
        const db = await this.dbPromise;
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], "readonly");
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject("Failed to list vault items");
        });
    }

    async removeItem(id: string): Promise<void> {
        const db = await this.dbPromise;
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], "readwrite");
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = () => reject("Failed to delete item");
        });
    }
}

export const offlineVault = new OfflineVaultService();
