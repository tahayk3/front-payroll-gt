import { toast } from 'react-toastify'

class NotificationService {
  constructor() {}

  notify(message, type = 'success', options = {}) {
    if (!['success', 'error', 'warning', 'info'].includes(type)) {
      throw new Error('Invalid notification type')
    }

    if (!message) {
      throw new Error('Notification message is required')
    }

    toast[type](message, options)
  }
}

export default Object.freeze(new NotificationService())
