import DefiView from './components/DefiView';
import Image from 'next/image';

export default function DefiPage() {
  return (
    <main className="relative min-h-screen bg-[#FAFAF8]">
      {/* 左上装饰 */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/stake-bg-1.png"
          alt=""
          width={686}
          height={686}
          className="w-[686px] h-[686px]"
        />
      </div>

      {/* 右下装饰 */}
      <div className="absolute right-0 bottom-0">
        <Image
          src="/images/stake-bg-2.png"
          alt=""
          width={686}
          height={686}
          className="w-[686px] h-[686px]"
        />
      </div>

      {/* 内容区域 */}
      <div className="relative">
        <DefiView />
      </div>
    </main>
  );
} 