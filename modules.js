export const modules = [
  {
    id: 'challenger-basics',
    title: 'Challenger Sale Fundamentals',
    description: 'Learn to teach, tailor, and take control of AWS sales conversations',
    icon: '🎯',
    difficulty: 'Beginner',
    methodology: 'Challenger',
    content: {
      sections: [
        {
          title: 'The Challenger Approach',
          text: 'The Challenger Sale methodology focuses on teaching customers something new about their business, tailoring the message to their needs, and taking control of the sale. In AWS context, this means educating customers about cloud transformation opportunities they might not see.'
        },
        {
          title: 'Teaching for Differentiation',
          text: 'AWS sellers must teach customers about: Cost optimization opportunities, Security best practices, Innovation through managed services, and Scalability advantages. The key is revealing insights customers don\'t know about their own business.'
        },
        {
          title: 'AWS-Specific Talk Tracks',
          text: 'Example: "Most companies in your industry are still thinking about cloud as just infrastructure. What if I showed you how three of your competitors are using AWS to launch new products 60% faster?"'
        }
      ],
      quiz: [
        {
          question: 'What is the primary goal of the Challenger approach?',
          options: [
            'Build strong relationships',
            'Teach customers something new about their business',
            'Offer the lowest price',
            'Respond quickly to RFPs'
          ],
          correct: 1
        },
        {
          question: 'In AWS sales, what should you teach customers about?',
          options: [
            'Only technical features',
            'Pricing models exclusively',
            'Business transformation opportunities',
            'Competitor weaknesses'
          ],
          correct: 2
        }
      ]
    }
  },
  {
    id: 'meddic-qualification',
    title: 'MEDDIC Qualification Framework',
    description: 'Master qualification with Metrics, Economic Buyer, Decision Criteria, and more',
    icon: '📊',
    difficulty: 'Intermediate',
    methodology: 'MEDDIC',
    content: {
      sections: [
        {
          title: 'MEDDIC Overview',
          text: 'MEDDIC stands for: Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. This framework ensures you qualify opportunities properly and focus on winnable deals.'
        },
        {
          title: 'Metrics in AWS Sales',
          text: 'Quantify the impact: "By migrating to AWS, you can reduce infrastructure costs by 30%, improve deployment speed by 5x, and achieve 99.99% uptime. What metrics matter most to your business case?"'
        },
        {
          title: 'Finding the Economic Buyer',
          text: 'In AWS deals, the economic buyer is often the CTO, CFO, or VP of Engineering. Ask: "Who ultimately approves cloud infrastructure investments of this size?" and "What concerns would they have about this decision?"'
        }
      ],
      quiz: [
        {
          question: 'What does the "M" in MEDDIC stand for?',
          options: ['Money', 'Metrics', 'Management', 'Methodology'],
          correct: 1
        },
        {
          question: 'Why is identifying the Economic Buyer critical?',
          options: [
            'They are the easiest to reach',
            'They control the budget and final decision',
            'They understand technical details best',
            'They respond to emails fastest'
          ],
          correct: 1
        }
      ]
    }
  },
  {
    id: 'spin-discovery',
    title: 'SPIN Selling for Discovery',
    description: 'Ask the right questions: Situation, Problem, Implication, Need-Payoff',
    icon: '❓',
    difficulty: 'Beginner',
    methodology: 'SPIN',
    content: {
      sections: [
        {
          title: 'SPIN Question Framework',
          text: 'SPIN stands for: Situation questions (understand context), Problem questions (uncover challenges), Implication questions (explore consequences), Need-Payoff questions (build value).'
        },
        {
          title: 'AWS Situation Questions',
          text: 'Examples: "What cloud infrastructure are you currently using?", "How many applications are you running on-premises?", "What\'s your current deployment process?"'
        },
        {
          title: 'AWS Problem Questions',
          text: 'Examples: "What challenges do you face with scaling during peak times?", "How often do you experience downtime?", "What\'s preventing you from deploying faster?"'
        },
        {
          title: 'AWS Implication Questions',
          text: 'Examples: "If you can\'t scale quickly, how does that impact customer experience?", "What does each hour of downtime cost your business?", "How is slow deployment affecting your competitive position?"'
        },
        {
          title: 'AWS Need-Payoff Questions',
          text: 'Examples: "If you could reduce deployment time by 80%, what would that enable?", "How valuable would 99.99% uptime be to your business?", "What could you do with the resources freed up from infrastructure management?"'
        }
      ],
      quiz: [
        {
          question: 'What type of SPIN question uncovers the consequences of problems?',
          options: ['Situation', 'Problem', 'Implication', 'Need-Payoff'],
          correct: 2
        },
        {
          question: 'Which question is a good Need-Payoff question for AWS?',
          options: [
            'What cloud provider do you use?',
            'Are you experiencing downtime?',
            'What would 5x faster deployments enable for your team?',
            'How many servers do you have?'
          ],
          correct: 2
        }
      ]
    }
  }
]
