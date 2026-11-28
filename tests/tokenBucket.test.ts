import { TokenBucket } from '../src/utils/tokenBucket.js';

function testTokenBucket() {
  const limiter = new TokenBucket(3, 1);

  console.assert(limiter.tryConsume(1) === true, 'First token should be consumed');
  console.assert(limiter.tryConsume(2) === true, 'Two tokens should be consumed');
  console.assert(limiter.tryConsume(1) === false, 'Bucket should be exhausted');

  console.log('All TokenBucket rate limiter tests passed!');
}

testTokenBucket();
