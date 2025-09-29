// controllers/contactController.js
import Contact from '@/models/Contact';

/**
 * Create a new contact document in MongoDB
 * @param {Object} data  { name, email, contact, message }
 * @returns {Promise<Object>} The saved contact document
 */
export async function createContact(data) {
  // Extra server-side validation if you like
  if (!data.name || !data.email || !data.contact || !data.message) {
    throw new Error('All fields are required');
  }

  // Insert into MongoDB
  const newContact = await Contact.create({
    name: data.name.trim(),
    email: data.email.trim(),
    contact: data.contact.trim(),
    message: data.message.trim(),
  });

  return newContact;
}
