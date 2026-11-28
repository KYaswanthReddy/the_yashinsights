import { TokenBucket } from '../utils/tokenBucket.js';

const formRateLimiter = new TokenBucket(3, 0.1); // Max 3 submissions, 1 token every 10s

export interface ContactSubmission {
  email: string;
  name: string;
  message: string;
}

export function validateContactSubmission(data: ContactSubmission): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  return { valid: errors.length === 0, errors };
}

export async function submitContact(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
  if (!formRateLimiter.tryConsume(1)) {
    return { success: false, message: 'Too many requests. Please wait a moment before trying again.' };
  }
  const validation = validateContactSubmission(data);
  if (!validation.valid) {
    return { success: false, message: validation.errors.join(', ') };
  }
  return { success: true, message: 'Your message has been dispatched successfully.' };
}
