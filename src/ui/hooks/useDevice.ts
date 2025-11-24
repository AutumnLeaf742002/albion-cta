export function useDevice() {

    let device = false

    if (window.matchMedia("(max-width: 767px)").matches) {

        device = false
    } else if (window.matchMedia("(max-width: 1024px)").matches) {

        device = true
    } else {

        device = true
    }

    return device;
}
