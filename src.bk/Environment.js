import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime'

const store = new Store(new RecordSource());

const readCookie = (name) => {
    let nameEQ = name + "=";
    for (let cookie of document.cookie.split(';')) {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

const network = Network.create((operation, variables) => {
    let meta = document.querySelector("link[rel=backend-endpoint]");
    return fetch(meta.getAttribute('href'), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CsrfToken': readCookie('csrftoken'),
        },
        credentials: 'include',
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
});

const environment = new Environment({
    network,
    store,
});

export default environment;
