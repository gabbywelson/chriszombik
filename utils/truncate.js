export default function truncate(str) {
    const shortened = str.substring(0,600)
    const lastPeriodIdx = shortened.lastIndexOf(".") + 1
    const truncated = shortened.substring(0, lastPeriodIdx)
    return truncated
}

