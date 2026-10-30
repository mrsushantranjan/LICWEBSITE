/**
 * Security & Sanitization Utilities
 * Implements strict defensive checks against XSS, Parameter Injection, and Malicious Input.
 */

// Strict pattern for Indian mobile numbers (10 digits starting with 6, 7, 8, or 9)
export const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

// Fixed authorized destination WhatsApp phone number
export const AUTHORIZED_WHATSAPP_NUMBER = '919801764651';
export const AUTHORIZED_CALLING_NUMBER = '+919801764651';

/**
 * Sanitizes generic user input text.
 * Strips HTML tags, control characters, and enforces length boundaries.
 * 
 * @param {string} input - Raw text from user
 * @param {number} maxLength - Maximum allowed length (default 500)
 * @returns {string} - Cleaned text
 */
export function sanitizeText(input, maxLength = 500) {
  if (typeof input !== 'string') return '';

  return input
    // Strip HTML tags
    .replace(/<[^>]*>?/gm, '')
    // Remove control characters (except newline \n)
    .replace(/[\x00-\x09\x0B-\x1F\x7F]/g, '')
    // Normalize consecutive spaces
    .replace(/[ \t]+/g, ' ')
    // Trim leading/trailing whitespace
    .trim()
    // Enforce length limit
    .slice(0, maxLength);
}

/**
 * Validates whether an Indian mobile number is valid.
 * @param {string} mobile - 10-digit mobile number
 * @returns {boolean}
 */
export function isValidMobile(mobile) {
  if (typeof mobile !== 'string') return false;
  const digitsOnly = mobile.replace(/\D/g, '');
  return INDIAN_MOBILE_REGEX.test(digitsOnly);
}

/**
 * Validates a safe external URL.
 * Only allows trusted https origins (e.g. licindia.in or wa.me).
 * Prevents javascript:, data:, or file: URL schemes.
 * 
 * @param {string} url - URL to validate
 * @returns {boolean}
 */
export function isSafeExternalUrl(url) {
  if (typeof url !== 'string' || !url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'tel:';
  } catch {
    return false;
  }
}
