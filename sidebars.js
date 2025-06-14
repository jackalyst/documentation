/**

QRL Docs Sidebar file -

- Add any new page to this sheet in the appropriate section.
- Single pages get a link 
- Add category sections with link s for directories that are multi-depth to generate a summary
  page for the section.

Don't forget to add links to the navbar as well!

 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: 'doc',
      id: 'getting-started', // document ID
      label: 'Getting Started', // sidebar label
    },
    {
      type: 'doc',
      id: 'Learn/what-is-qrl', // document ID
      label: 'What Is The QRL', // sidebar label
    },    

    /////////////////////////////////
    // Using-QRL collapsible section
    /////////////////////////////////
    {
      type: 'category',
      label: 'Use The QRL',
      link: {
        type: 'generated-index',
        title: 'Using The QRL',
        description: 'Covering QRL Wallet usage, Node installation, Mining, and all things QRL Network Interfacing',
        slug: '/use',
        keywords: ['use'],
        image: '/assets/img/icons/yellow.png',
      },
      items: [
        { // Wallet section //
          type: 'category',
          label: 'Wallet',
          link: {
            type: 'generated-index',
            title: 'QRL Wallet',
            description: 'Covering QRL Wallets across all distributions and supported devices.',
            slug: '/use/wallet',
            keywords: ['use'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Use/Wallet/wallet-overview',
            'Use/Wallet/check-balance',
            'Use/Wallet/qrl-address-overview',
            { // web Wallet //
              type: 'category',
              label: 'Web Wallet',
              link: {
                type: 'generated-index',
                title: 'QRL Web Wallet',
                description: 'Covering the QRL Web Wallet usage.',
                slug: '/use/wallet/web',
                keywords: ['use-web-wallet'],
                image: '/assets/img/icons/yellow.png',
              },

              items: [
                'Use/Wallet/Web/web-wallet-overview',
                'Use/Wallet/Web/web-wallet-new',
                'Use/Wallet/Web/web-wallet-open',
                'Use/Wallet/Web/web-wallet-send',
                'Use/Wallet/Web/web-wallet-backup',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            { // Desktop Wallet //
              type: 'category',
              label: 'Desktop Wallet',
              link: {
                type: 'generated-index',
                title: 'QRL Desktop Wallet',
                description: 'Covering the QRL Desktop Wallet usage.',
                slug: '/use/wallet/desktop',
                keywords: ['use-desktop-wallet'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Wallet/Desktop/desktop-wallet-overview',
                'Use/Wallet/Desktop/desktop-wallet-install',
                'Use/Wallet/Desktop/desktop-wallet-new',
                'Use/Wallet/Desktop/desktop-wallet-open',
                'Use/Wallet/Desktop/desktop-wallet-send',
                'Use/Wallet/Desktop/desktop-wallet-backup',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            { // Ledger Wallet //
              type: 'category',
              label: 'Ledger Wallet',
              link: {
                type: 'generated-index',
                title: 'QRL Ledger Wallet',
                description: 'Covering the QRL Ledger device usage.',
                slug: '/use/wallet/ledger',
                keywords: ['use-ledger-wallet'],
                image: '/assets/img/icons/yellow.png',
              },

              items: [
                'Use/Wallet/Ledger/ledger-wallet-overview',
                'Use/Wallet/Ledger/ledger-wallet-new',
                'Use/Wallet/Ledger/ledger-wallet-open',
                'Use/Wallet/Ledger/ledger-wallet-send',
                'Use/Wallet/Ledger/ledger-wallet-backup-restore',
                'Use/Wallet/Ledger/ledger-wallet-plausible-deniability',
                'Use/Wallet/Ledger/ledger-wallet-known-issues',
                
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            
            { // Mobile Wallet //
              type: 'category',
              label: 'Mobile Wallet',
              link: {
                type: 'doc',
                id: 'Use/Wallet/Mobile/mobile-wallet-warning',
              },
              items: [
                'Use/Wallet/Mobile/mobile-wallet-overview',
                'Use/Wallet/Mobile/mobile-wallet-new',
                'Use/Wallet/Mobile/mobile-wallet-open',
                'Use/Wallet/Mobile/mobile-wallet-backup',
                // 'Use/Wallet/Mobile/mobile-wallet-warning',
                //'Use/Wallet/Mobile/mobile-wallet-install',
                //'Use/Wallet/Mobile/mobile-wallet-switch-addresses',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            
            { // offline Wallet //
              type: 'category',
              label: 'Offline Wallet',
              link: {
                type: 'generated-index',
                title: 'QRL Offline Wallet',
                description: 'Covering the QRL offline Wallet usage.',
                slug: '/use/wallet/offline',
                keywords: ['use-offline-wallet'],
                image: '/assets/img/icons/yellow.png',
              },              
              items: [
                'Use/Wallet/Offline/offline-wallet-overview',
                'Use/Wallet/Offline/offline-wallet-install',
                'Use/Wallet/Offline/offline-wallet-verify',
                'Use/Wallet/Offline/offline-wallet-new',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },

        { // Mining section //
          type: 'category',
          label: 'Mining',
          link: {
            type: 'generated-index',
            title: 'Mining QRL',
            description: 'Covering QRL Mining topics.',
            slug: '/use/mining',
            keywords: ['mining-qrl'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Use/Mining/mining-qrl-overview',
            'Use/Mining/solo-mining',
            'Use/Mining/pool-mining',
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },        

        { // Node section //
          type: 'category',
          label: 'Node',
          link: {
            type: 'generated-index',
            title: 'QRL Node',
            description: 'Covering QRL Node installation and operation.',
            slug: '/use/node',
            keywords: ['use-node'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Use/Node/overview',
            'Use/Node/node-requirements',
            'Use/Node/node-installation',
            'Use/Node/node-config',
            'Use/Node/node-uses',
            'Use/Node/node-update',
            'Use/Node/qrl-maintenance',

            { // node-cli section //
              type: 'category',
              label: 'Node-CLI',
              link: {
                type: 'generated-index',
                title: 'QRL Node-CLI',
                description: 'QRL node command line tools.',
                slug: '/use/node/node-cli',
                keywords: ['node-cli'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Node/node-cli/node-cli',
                'Use/Node/node-cli/backup-cli-wallet',
                'Use/Node/node-cli/node-cli-slave-xmss',
                ]
            },
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },
        { // Tools section //
          type: 'category',
          label: 'Tools',
          link: {
            type: 'generated-index',
            title: 'QRL Tools',
            description: 'Covering QRL Tools.',
            slug: '/use/tools',
            keywords: ['use-tool'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            // Tools Explorer
            {
              type: 'category',
              label: 'Explorer',
              link: {
                type: 'generated-index',
                title: 'QRL Explorer Usage',
                description: 'Using the QRL Explorer.',
                slug: '/use/tools/explorer',
                keywords: ['explorer'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/explorer/qrl-explorer',
                'Use/Tools/explorer/address-lookup',
                'Use/Tools/explorer/transaction-lookup',
                'Use/Tools/explorer/block-lookup',
                'Use/Tools/explorer/token-lookup',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            // Tools Messages
            {
              type: 'category',
              label: 'Messages',
              link: {
                type: 'generated-index',
                title: 'QRL Message Usage',
                description: 'QRL Message transaction usage',
                slug: '/use/tools/messages',
                keywords: ['messages'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/messages/messages',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },

            // Tools multi-sig
            {
              type: 'category',
              label: 'Multisig',
              link: {
                type: 'generated-index',
                title: 'QRL Multi-signature Usage',
                description: 'Multi-sig transaction usage and guide.',
                slug: '/use/tools/multi-sig',
                keywords: ['multisig'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/multisig/multisig',
                'Use/Tools/multisig/multisig-generate',
                'Use/Tools/multisig/Multisig-spend-proposal',
                'Use/Tools/multisig/multisig-vote',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },

            // Tools notarize
            {
              type: 'category',
              label: 'Notarize',
              link: {
                type: 'generated-index',
                title: 'Notarization Usage Guide',
                description: 'Usage for the Notarization functions.',
                slug: '/use/tools/notarize',
                keywords: ['notarize'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/notarize/notarization-overview',
                'Use/Tools/notarize/notarization-data',
                'Use/Tools/notarize/notarization-verification',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },

            // Tools Tokens
            {
              type: 'category',
              label: 'Tokens',
              link: {
                type: 'generated-index',
                title: 'QRL Token Usage',
                description: 'Token Transactions and usage.',
                slug: '/use/tools/tokens',
                keywords: ['tokens'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/tokens/qrl-tokens-overview',
                'Use/Tools/tokens/create-token',
                'Use/Tools/tokens/send-token',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
            {
              type: 'category',
              label: 'Integrations',
              link: {
                type: 'generated-index',
                title: 'QRL Integrations',
                description: 'QRL integrations with other projects.',
                slug: '/use/tools/integrations',
                keywords: ['integrations'],
                image: '/assets/img/icons/yellow.png',
              },
              items: [
                'Use/Tools/Integrations/keybase/keybase',
              ],
              collapsible: true, // Set the category to be collapsible
              collapsed: true, // Set the category to be initially collapsed or open by default
            },
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },

      ],
      collapsible: true, // Set the category to be collapsible
      collapsed: true, // Set the category to be initially collapsed or open by default
    },

    /////////////////////////////
    // Build On collapsible section
    /////////////////////////////
    {
      type: 'category',
      label: 'Build On QRL',
      link: {
        type: 'generated-index',
        title: 'Developer Docs',
        description: 'Advanced documentation for developers and adventurers building on the QRL.',
        slug: '/build',
        keywords: ['developer', 'build'],
        image: '/assets/img/icons/yellow.png',
      },
      items: [
        // 'Build/developers-overview',
        'Build/qrl-status',
        'Build/qrllib',
        'Build/security',
        'Build/Docker/qrl-docker',
        'Build/Mining/qrandomx',
        'Build/Mining/qrl-pool-setup',
        'Build/QIP/qip-overview',
        'Build/QRL-CLI/qrl-cli',
        'Build/qrl-private-network',
        { // Fundamentals//
          type: 'category',
          label: 'QRL Fundamentals',
          link: {
            type: 'generated-index',
            title: 'QRL Fundamental Topics',
            description: 'Covering some fundamental topics related to the QRL',
            slug: '/build/fundamentals',
            keywords: ['learn'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Build/Fundamentals/ots-keys',
            'Build/Fundamentals/whitepaper',
            'Build/Fundamentals/qrl-emission',
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },
        { // Message Encoding//
          type: 'category',
          label: 'QRL Messages',
          link: {
            type: 'generated-index',
            title: 'QRL Message Encoding Documentation',
            description: 'Message encoding standard for the various QRL Message Transaction types',
            slug: '/build/messages',
            keywords: ['learn'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Build/Messages/message-tx-encoding',
            'Build/Messages/notarization-message-encoding',
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },
        { // Address Scheme//
          type: 'category',
          label: 'QRL Addresses',
          link: {
            type: 'generated-index',
            title: 'QRL Address Docs',
            description: 'Building blocks for the QRL Address Scheme, how addresses are constructed and the cryptography behind them',
            slug: '/build/addresses',
            keywords: ['learn'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Build/Address/qrl-address-scheme',
            'Build/Address/hexphrase',
            'Build/Address/mnemonic',
            'Build/Address/wallet-json',
            'Build/Address/slave-keys',
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },
        { // QRL Node CLI //
          type: 'category',
          label: 'QRL Helpers',
          link: {
            type: 'generated-index',
            title: 'QRL Code Libraries and helpers',
            description: 'Various helper scripts developed to aid and assist in developing on the QRL.',
            slug: '/build/helpers',
            keywords: ['qrl-helpers', 'node-helpers'],
            image: '/assets/img/icons/yellow.png',
          },
          items: [
            'Build/QRL-Helpers/node-helpers',
            'Build/QRL-Helpers/validate-qrl-address',
            'Build/QRL-Helpers/explorer-helpers',
          ],
          collapsible: true, // Set the category to be collapsible
          collapsed: true, // Set the category to be initially collapsed or open by default
        },
      ],
      collapsible: true, // Set the category to be collapsible
      collapsed: true, // Set the category to be initially collapsed or open by default
    },

    /////////////////////////////
    // API collapsible section
    /////////////////////////////
    {
      type: 'category',
      label: 'QRL API',
      link: {
        type: 'generated-index',
        title: 'API Docs',
        description: 'API documentation for developers building on the QRL.',
        slug: '/api',
        keywords: ['api', 'developers', 'rest', 'grpc'],
        image: '/assets/img/icons/yellow.png',
      },
      items: [
        'API/qrl-api-overview',
        'API/qrl-public-api',
        'API/wallet-api',
        'API/explorer-api',
        'API/richlist-api',
        'API/walletd-rest-proxy',
        'API/zeus-proxy',
      ]
    },

  ],
  // tutorialSidebar shown on the tutorials pages
  tutorialSidebar: [
    'Tutorials/qrl-tutorials',
    'Tutorials/notarize-qrl-cli',

    { // Node tutorials //
      type: 'category',
      label: 'Node',
      link: {
        type: 'generated-index',
        title: 'QRL Node Tutorials',
        description: 'Guides related to node operations.',
        slug: '/tutorials/node',
        keywords: ['node-tutorials'],
        image: '/assets/img/icons/yellow.png',
      },

      items: [
        'Tutorials/Node/dual-node-host',
        'Tutorials/Node/walletd-api-linux-guide',
        'Tutorials/Node/backup-restore-node-state',
      ],
      collapsible: true, // Set the category to be collapsible
      collapsed: true, // Set the category to be initially collapsed or open by default
    },

    { // Node tutorials //
      type: 'category',
      label: 'Wallet',
      link: {
        type: 'generated-index',
        title: 'QRL Wallet Tutorials',
        description: 'Guides related to wallet operations.',
        slug: '/tutorials/wallet',
        keywords: ['wallet-tutorials'],
        image: '/assets/img/icons/yellow.png',
      },

      items: [
      // 'Tutorials/Wallet/automatic-wallet-api-use', 
      // 'Tutorials/Wallet/automatic-wallet-api', 
      'Tutorials/Wallet/generate-address-dice',
      ],
      collapsible: true, // Set the category to be collapsible
      collapsed: true, // Set the category to be initially collapsed or open by default
    },
  ],
};

module.exports = sidebars;
