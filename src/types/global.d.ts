interface Window {
  phantom?: {
    solana?: {
      connect(): Promise<{ publicKey: { toString(): string } }>;
      disconnect(): Promise<void>;
      isConnected: boolean;
    };
  };
  solflare?: {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected: boolean;
    publicKey?: { toString(): string };
  };
} 