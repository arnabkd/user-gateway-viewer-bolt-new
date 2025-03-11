import { Client } from '@microsoft/microsoft-graph-client';
import { User } from '../types';
import { mockUsers } from './mockData';

export class GraphApiClient {
  private client: Client;

  constructor(accessToken: string) {
    this.client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });
  }

  async getUsers(includeInactive: boolean = false): Promise<User[]> {
    try {
      const filter = includeInactive ? undefined : "accountEnabled eq true";
      const response = await this.client
        .api('/users')
        .filter(filter)
        .select('id,displayName,mail,jobTitle,userPrincipalName')
        .get();

      return response.value.map((user: any) => ({
        id: user.id,
        displayName: user.displayName,
        email: user.mail || user.userPrincipalName,
        jobTitle: user.jobTitle || 'Not specified',
        photoUrl: `https://graph.microsoft.com/v1.0/users/${user.id}/photo/$value`,
        isActive: user.accountEnabled
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}

// For development/demo purposes, use mock data
export const getMockUsers = (includeInactive: boolean = false): User[] => {
  return mockUsers.filter(user => includeInactive || user.isActive);
};