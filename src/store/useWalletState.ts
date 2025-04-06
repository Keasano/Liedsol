import { create } from 'zustand';

interface WalletState {
  isMockConnected: boolean;
  setMockConnected: (state: boolean) => void;
}

export const useWalletState = create<WalletState>((set) => ({
  isMockConnected: true,
  setMockConnected: (state) => set({ isMockConnected: state }),
})); 