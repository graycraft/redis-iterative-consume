import nodeFs from 'node:fs';

import redis from 'redis';

const consumeNumbers = async () => {
    const numbersGenerated: { date: string; value: string }[] = [],
      startTime = Date.now();

    while (await redisClient.lLen('random_numbers')) {
      const value = (await redisClient.rPop('random_numbers')) as string,
        isUnique = !numbersGenerated.some((entry) => entry.value === value);

      if (isUnique)
        numbersGenerated.push({
          date: new Date().toISOString(),
          value,
        });
    }

    const timeSpent = Date.now() - startTime + ' ms',
      result = {
        timeSpent,
        numbersGenerated,
      };

    nodeFs.writeFileSync('logs/result.json', JSON.stringify(result, null, 2));

    console.info('Unique random numbers collected and saved to `logs/result.json`.');
  },
  produceNumbers = async () => {
    await redisClient.del('random_numbers');

    for (let i = 0; i < producersCount; i++) {
      const randomNumber = Math.round(Math.random() * randomRange + randomMin);

      await redisClient.lPush('random_numbers', String(randomNumber));

      console.info(`Random number ${randomNumber} added to head of the list \`random_numbers\`.`);
    }
  },
  producersCount = 10,
  randomMax = 10,
  randomMin = 1,
  randomRange = randomMax - randomMin,
  redisClient = await redis.createClient();

await redisClient.connect();
await produceNumbers();
await consumeNumbers();

process.on('exit', () => redisClient.quit());

export { redisClient };
