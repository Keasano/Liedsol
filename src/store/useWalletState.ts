import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WalletState {
  isMockConnected: boolean;
  mockAddress: string;
  mockBalance: {
    SOL: number;
    LSOL: number;
  };
  setMockConnected: (state: boolean) => void;
  setMockAddress: (address: string) => void;
  setMockBalance: (balance: { SOL: number; LSOL: number }) => void;
}

// 创建一个模拟的钱包地址
const MOCK_ADDRESS = "0xDA...B6fn";
const MOCK_BALANCE = {
  SOL: 1.2345,
  LSOL: 0.5678
};

export const useWalletState = create<WalletState>()(
  persist(
    (set) => ({
      isMockConnected: false, // 默认为未连接状态
      mockAddress: MOCK_ADDRESS,
      mockBalance: MOCK_BALANCE,
      setMockConnected: (state) => set({ isMockConnected: state }),
      setMockAddress: (address) => set({ mockAddress: address }),
      setMockBalance: (balance) => set({ mockBalance: balance }),
    }),
    {
      name: 'wallet-storage', // 存储的键名
    }
  )
); 