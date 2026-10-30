import { advisorConfig } from '../config/advisorConfig';
import { 
  AUTHORIZED_WHATSAPP_NUMBER, 
  AUTHORIZED_CALLING_NUMBER, 
  sanitizeText, 
  isValidMobile 
} from './security';

/**
 * Builds a safe, direct WhatsApp chat URL with properly encoded message.
 * Destination number is strictly anchored to prevent destination hijacking.
 * 
 * @param {string} customMessage - Message text
 * @returns {string} - Strict wa.me URL
 */
export function getWhatsAppUrl(customMessage) {
  // Hardcoded or strictly validated authorized number
  const destination = AUTHORIZED_WHATSAPP_NUMBER;
  const rawText = customMessage || advisorConfig.whatsAppMessages?.default || 'Hello Guddu Baba';
  
  // Sanitize message and enforce 2000-char safety boundary
  const sanitizedMessage = sanitizeText(rawText, 2000);

  // Use URL constructor with strict origin to prevent open-redirect / parameter injection
  const baseUrl = `https://wa.me/${destination}`;
  return `${baseUrl}?text=${encodeURIComponent(sanitizedMessage)}`;
}

/**
 * Builds a secure telephone calling URI.
 * Guaranteed safe tel: protocol without arbitrary scheme injection.
 * 
 * @returns {string} - tel: link
 */
export function getCallingUrl() {
  return `tel:${AUTHORIZED_CALLING_NUMBER}`;
}

/**
 * Formats an enhanced customer enquiry form submission into a professional WhatsApp template.
 * Performs rigorous sanitization on every field to prevent script/parameter injection.
 * 
 * @param {Object} formData
 * @param {string} formData.name - Customer full name
 * @param {string} formData.mobile - Customer mobile number
 * @param {string} formData.ageGroup - Customer age group
 * @param {string} formData.occupation - Customer occupation
 * @param {string} formData.category - Selected insurance category
 * @param {string} formData.hasExistingPolicy - Yes / No
 * @param {string} formData.preferredContact - WhatsApp / Phone Call
 * @param {string} formData.message - Additional message/notes
 * @returns {string} - Encoded WhatsApp URL
 */
export function buildEnquiryWhatsAppUrl({
  name,
  mobile,
  ageGroup,
  occupation,
  category,
  hasExistingPolicy,
  preferredContact,
  message
}) {
  const cleanName = sanitizeText(name || '', 100);
  const cleanDigits = (mobile || '').replace(/\D/g, '').slice(0, 10);
  const cleanAge = sanitizeText(ageGroup || '', 50);
  const cleanOcc = sanitizeText(occupation || '', 50);
  const cleanCat = sanitizeText(category || '', 80);
  const cleanPolicy = hasExistingPolicy === 'Yes' ? 'Yes' : 'No';
  const cleanContact = preferredContact === 'Phone Call' ? 'Phone Call' : 'WhatsApp';
  const cleanMessage = sanitizeText(message || '', 500);

  const lines = [
    `Hello Guddu Baba,`,
    `I would like to enquire about LIC insurance planning.`,
    `--------------------------------`,
    `Name: ${cleanName || 'Not specified'}`,
    `Mobile: ${cleanDigits || 'Not specified'}`
  ];

  if (cleanAge) lines.push(`Age Group: ${cleanAge}`);
  if (cleanOcc) lines.push(`Occupation: ${cleanOcc}`);
  if (cleanCat) lines.push(`Interested In: ${cleanCat}`);
  lines.push(`Existing LIC Policy: ${cleanPolicy}`);
  lines.push(`Preferred Contact: ${cleanContact}`);
  if (cleanMessage) lines.push(`Message: ${cleanMessage}`);
  
  lines.push(`--------------------------------`);
  lines.push(`Please contact me.`);

  const fullText = lines.join('\n');
  return getWhatsAppUrl(fullText);
}
