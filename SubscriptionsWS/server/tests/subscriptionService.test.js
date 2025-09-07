const subscriptionService = require('../services/subscriptionService');

// Mock the repository methods
jest.mock('../repositories/subscriptionRepo', () => ({
  getSubscriptionById: jest.fn((id) => ({ id, name: 'Test Subscription' })),
  getAllSubscriptions: jest.fn(() => [{ id: 1, name: 'Test Subscription' }]),
  addSubscription: jest.fn((sub) => ({ ...sub, id: 2 })),
  updateSubscription: jest.fn((id, sub) => ({ ...sub, id })),
  deleteSubscription: jest.fn((id) => true)
}));

describe('subscriptionService', () => {
  test('getSubscriptionById returns subscription', () => {
    const result = subscriptionService.getSubscriptionById(1);
    expect(result).toEqual({ id: 1, name: 'Test Subscription' });
  });

  test('getAllSubscriptions returns array', () => {
    const result = subscriptionService.getAllSubscriptions();
    expect(result).toEqual([{ id: 1, name: 'Test Subscription' }]);
  });

  test('addSubscription returns new subscription', () => {
    const result = subscriptionService.addSubscription({ name: 'New Sub' });
    expect(result).toEqual({ name: 'New Sub', id: 2 });
  });

  test('updateSubscription returns updated subscription', () => {
    const result = subscriptionService.updateSubscription(1, { name: 'Updated Sub' });
    expect(result).toEqual({ name: 'Updated Sub', id: 1 });
  });

  test('deleteSubscription returns true', () => {
    const result = subscriptionService.deleteSubscription(1);
    expect(result).toBe(true);
  });
});
