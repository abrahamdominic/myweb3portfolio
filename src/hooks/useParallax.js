import { useTransform } from "framer-motion"

/**
 * @param {number} value 
 * @param {number} distance
 */
export const useParallex = (value, distance) => {
    return useTransform(value, [-distance, distance])
}