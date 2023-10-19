/**
 * @param {Element} element
 * @param {IntersectionObserverCallback} func
 */
export const useObserver = (element, func) => {
    const observer = new IntersectionObserver(func)
    observer.observe(element)
}
/**
 * @param {Element} element
 * @param {?Record<string, any>} options
 */
export const useAsyncObserver = (element, options) => {
    return new Promise((resolve) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resolve()
                }
            })
        }, options)
        observer.observe(element)
    })
}