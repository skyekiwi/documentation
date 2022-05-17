module.exports = {
  docs: [
    {
      type: 'category',
      label: 'SKYEKIWI',
      collapsed: false,
      items: [
        'main/introduction',
        'main/philosophy',
        'main/virtual-machines',
        'main/contributing',
      ],
    },
    {
      type: 'category',
      label: 'QUICK START',
      collapsed: false,
      items: ['quick_start/interact', 'quick_start/deploy'],
    },
    {
      type: 'category',
      label: 'SKYEKIWI PROTOCOL',
      collapsed: false,
      items: ['protocol/introduction', 'protocol/protocol', 'protocol/ipfs'],
    },
    {
      type: 'category',
      label: 'SKYEKIWI NETWORK',
      collapsed: false,
      items: [
        'network/introduction', 
        'network/consensus',
        'network/relay', 
        'network/transaction-encoding',
        'network/gateways',
        'network/virtual-shards', 
        'network/assets-bridge',
        'network/conditional-gasless',
        'network/key-rotation',
      ],
    },
    {
      type: 'category',
      label: 'FQA',
      collapsed: false,
      items: [
        'faqs/install-wallet', 
      ],
    },
    'bounties'
  ],
};
