'use client';

import { useParams } from 'next/navigation';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function ChannelPage() {
  const params = useParams();
  const channelName = params?.channelName;

  return (
    <div className="max-w-5xl w-full text-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-3xl font-bold text-stonkGreen">{channelName} STONK</h1>
        <WalletMultiButton className="!bg-stonkGreen !text-white" />
      </div>

      <div className="w-full aspect-video bg-gray-200 rounded mb-6">[Live Stream Here]</div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Live Chat</h2>
        <div className="w-full h-64 bg-white border rounded p-2 overflow-y-scroll">[Chat Box Placeholder]</div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Token Chart</h2>
          <div className="w-full h-40 bg-gray-100">[Chart Placeholder]</div>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Buy/Sell</h2>
          <button className="bg-stonkGreen text-white px-4 py-2 rounded w-full mb-2">Buy</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Sell</button>
        </div>
      </div>
    </div>
  );
}
