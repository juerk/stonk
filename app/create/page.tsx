'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function CreatePage() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-stonkGreen">Create Your Channel</h1>
        <WalletMultiButton className="!bg-stonkGreen !text-white" />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-700 mb-4">
          Set up your channel and token below. Upload your logo, choose a channel name, and deploy your stream coin.
        </p>
        <div className="border border-dashed border-gray-300 rounded p-6 text-gray-500">
          [Channel & Token Creation Form Coming Soon]
        </div>
      </div>
    </div>
  );
}
