import { redisClient } from '../app.mts';

describe('Redis Client.', () => {
  test('Expect `clientId` to be a number.', async () => {
    expect(typeof (await redisClient.clientId())).toBe('number');
  });
});
