// import * as rxjs from '../../../../node_modules/rxjs/bundles/rxjs.umd.js'

export function status(path) {
    console.group("%c[AUTHENTICATION]", 'color: #e67e22', new Date().toLocaleTimeString())
    console.log("%c[AUTHENTICATION Status]", 'color: #e67e22', path)
    console.groupEnd();
    // Get token from localstorage
    if (localStorage.getItem("token") != undefined) {
        return true
    } else {
        return false;
    }
}

export function login() {
    console.group("%c[AUTHENTICATION]", 'color: #e67e22', new Date().toLocaleTimeString())
    console.log("%c[AUTHENTICATION Login]", 'color: #e67e22')
    console.groupEnd();
    return new rxjs.Observable(observer => {
        // login to server
        setTimeout(() => {
            // On success
            // Save token to localstorage
            localStorage.setItem("token", "0123456789")
            // Go next step
            observer.next({
                name: "hamed"
            })
        }, 1000)
        // observer.complete()
    });
}

export function logout() {
    console.group("%c[AUTHENTICATION]", 'color: #e67e22', new Date().toLocaleTimeString())
    console.log("%c[AUTHENTICATION Logout]", 'color: #e67e22')
    console.groupEnd();
    return new rxjs.Observable(observer => {
        // logout from server
        setTimeout(() => {
            // On success
            // clear token from localstorage
            localStorage.removeItem("token")
            // Go next step
            observer.next({ name: "hamed" })
        }, 2000)
        // observer.complete()
    });
}

export default {
    logout,
    login,
    status
}
