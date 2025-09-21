interface MasumiService {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'ADA';
}

export const masumiAgent = {
  services: [
    {
      id: 'skills-assessment',
      name: 'On-Chain Skills Assessment',
      description: 'Analyze your wallet activity to determine experience level and skills',
      price: 0.5,
      currency: 'ADA' as const
    },
    {
      id: 'roadmap-generation',
      name: 'Personalized Career Roadmap',
      description: 'Get a detailed learning path with milestones and resources',
      price: 1.5,
      currency: 'ADA' as const
    },
    {
      id: 'catalyst-guidance',
      name: 'Project Catalyst Guidance',
      description: 'Specialized support for Catalyst proposal creation and submission',
      price: 3.0,
      currency: 'ADA' as const
    }
  ] as MasumiService[],

  async register(): Promise<boolean> {
    // Simulate agent registration with Masumi platform
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Cardano Career Navigator registered with Masumi platform');
    return true;
  },

  async verifyPayment(serviceId: string, transactionHash: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 800));
    // Simulate payment verification
    return true;
  },

  getServiceById(serviceId: string): MasumiService | undefined {
    return this.services.find(service => service.id === serviceId);
  },

  formatPrice(price: number): string {
    return `${price} ADA`;
  }
};