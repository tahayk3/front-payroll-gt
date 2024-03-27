import config from '../config'

// notification service
import notificationService from './notification-service'

// session service
import sessionService from './session-service'

// HTTP methods
const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

class ApiService {
    #token = ''
    #root = config.API_URL
    headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    // resolve request with fetch
    async #request(url, method, data) {

        this.#token = `Token ${sessionService.get('token')}`

        const options = {
            method,
            headers: {
                ...this.headers,
                Authorization: this.#token,
            },
        }

        if (method !== HTTP_METHOD.GET && method !== HTTP_METHOD.DELETE) {
            options.body = JSON.stringify(data)
        }

        return new Promise((resolve, reject) => {
            fetch(`${this.#root}${url}`, options)
                .then(response => {
                    const values = response.json().then(data => ({
                        status: response.status,
                        headers: response.headers,
                        data,
                    }))

                    if (!response.ok) {
                        return values
                    }

                    resolve(values)
                })
                .then(response => {
                    const message = this.#errorMessageToString(response.data)
                    notificationService.notify(message, 'error', {})
                    resolve(response)
                })
                .catch((err) => {
                    console.error('Error en la solicitud:', err);
                    if (err instanceof TypeError && err.message === 'Failed to fetch') {
                        notificationService.notify('Error de red. Por favor, comprueba tu conexión a internet.', 'error', {});
                    } else {
                        // Otros tipos de errores
                        notificationService.notify('Error interno en el servidor. Por favor, inténtalo de nuevo más tarde.', 'error', {});
                    }
                    reject(err);
                })
        })
    }

    // this function converts request response error messages to string
    #errorMessageToString(data) {
        let message = JSON.stringify(data)

        message = message.replace(/[{}"]/g, '')
        message = message.replace(/[[\]"]/g, '')
        message = message.replace(/[:]/g, ' : ')
        message = message.replace(/,/g, '')

        return message
    }

    // parse regular expresion url to functional url
    // Example: /users/:user_id/posts/:post_id -> /users/1/posts/53
    #parseUrl(url, params) {
        if (params === undefined || Object.keys(params).length === 0) {
            return url
        }

        const regex = /:([\wáéíóúÁÉÍÓÚñÑüÜ]+)/g;

        return url.replace(regex, (_, paramName) => {
            if (!params[paramName]) {
                return paramName
            }

            return params[paramName]
        })
    }

    async get({ url, params }) {
        const parsedUrl = this.#parseUrl(url, params)
        return this.#request(parsedUrl, HTTP_METHOD.GET)
    }

    async post({ url, data }) {
        if (undefined === data) {
            throw new Error('request post required data object')
        }
        return this.#request(url, HTTP_METHOD.POST, data)
    }

    async put({ url, params, data }) {
        if (undefined === data) {
            throw new Error('put request required a data object')
        }

        const parsedUrl = this.#parseUrl(url, params)
        return this.#request(parsedUrl, HTTP_METHOD.PUT, data)
    }

    async patch({ url, params, data }) {
        if (undefined === data) {
            throw new Error('patch request required a data object')
        }

        const parsedUrl = this.#parseUrl(url, params)
        return this.#request(parsedUrl, HTTP_METHOD.PATCH, data)
    }

    async delete({ url, params }) {
        const parsedUrl = this.#parseUrl(url, params)

        return this.#request(parsedUrl, HTTP_METHOD.DELETE)
    }
}

export const apiService = Object.freeze(new ApiService())