import { LRUCache } from '../src/utils/lruCache.js';

// Basic verification test runner
function testLruCache() {
  const cache = new LRUCache<string, number>(2, 60);

  cache.set('a', 1);
  cache.set('b', 2);
  console.assert(cache.get('a') === 1, 'Key a should be present');

  cache.set('c', 3); // Evicts b (since a was accessed last)
  console.assert(cache.get('b') === undefined, 'Key b should have been evicted');
  console.assert(cache.get('c') === 3, 'Key c should be present');

  console.log('All LRU cache unit tests passed!');
}

testLruCache();
