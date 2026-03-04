export const practiceScenarios = {
  'challenger-basics': [
    {
      title: 'Teaching Moment',
      context: 'You\'re meeting with a retail company CTO who thinks cloud is just about cost savings.',
      customerStatement: 'We\'re happy with our current data center. Cloud seems expensive.',
      tips: [
        'Teach them about innovation speed, not just cost',
        'Use a competitor example or industry insight',
        'Challenge their assumption with data',
        'Example: "Three retailers in your space are using AWS to launch new features weekly instead of quarterly. That\'s how they\'re winning market share."'
      ]
    },
    {
      title: 'Taking Control',
      context: 'Customer wants to discuss pricing before understanding their needs.',
      customerStatement: 'Can you just send me a price list for EC2 instances?',
      tips: [
        'Redirect to business outcomes first',
        'Ask about their goals before pricing',
        'Example: "I can do that, but pricing varies wildly based on your workload. Let\'s spend 10 minutes understanding what you\'re trying to achieve, then I\'ll give you accurate numbers."'
      ]
    }
  ],
  'meddic-qualification': [
    {
      title: 'Finding Metrics',
      context: 'Early conversation with a VP of Engineering about cloud migration.',
      customerStatement: 'We\'re thinking about moving some workloads to the cloud.',
      tips: [
        'Ask for specific metrics they care about',
        'Example: "What metrics would make this migration successful for you? Cost reduction? Deployment speed? Uptime?"',
        'Quantify the current state vs desired state',
        'Get them to commit to numbers'
      ]
    },
    {
      title: 'Identifying Economic Buyer',
      context: 'You\'ve been talking to a DevOps manager for weeks.',
      customerStatement: 'This all sounds great. I\'ll take it to my team.',
      tips: [
        'Identify who controls the budget',
        'Example: "That\'s great. For a decision of this size, who else needs to be involved? Who typically approves cloud infrastructure investments?"',
        'Ask about the approval process',
        'Request an introduction to the economic buyer'
      ]
    }
  ],
  'spin-discovery': [
    {
      title: 'Situation to Problem',
      context: 'Discovery call with a SaaS company CTO.',
      customerStatement: 'We\'re running everything on-premises right now.',
      tips: [
        'Ask situation questions first to understand context',
        'Then transition to problem questions',
        'Example: "How many applications are you managing? What challenges come up with your current setup?"',
        'Listen for pain points to explore'
      ]
    },
    {
      title: 'Implication Questions',
      context: 'Customer mentioned they have occasional downtime.',
      customerStatement: 'Yeah, we go down maybe once a month for a few hours.',
      tips: [
        'Explore the business impact',
        'Example: "What happens to your business during those hours? How does it affect your customers?"',
        'Quantify the cost of the problem',
        'Make the problem feel bigger and more urgent'
      ]
    }
  ]
}
