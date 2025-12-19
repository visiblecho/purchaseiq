import { useEffect } from 'react'

const PollingComponent = ({ apiCall, wait_msecs, onData, setWaiting }) => {
  useEffect(() => {
    let isCancelled = false
    let count = 0

    const poll = async () => {
      try {
        const { data } = await apiCall()
        console.log(data)
        count += 1
        if (count > 5) setWaiting(false)

        if (!isCancelled) {
          if (data && data.analysis_completed) {
            onData() // trigger the function passed via props
          } else {
            setTimeout(poll, 1000) // continue polling after 1 second
          }
        }
      } catch (err) {
        console.error('Polling error:', err)
        if (!isCancelled) setTimeout(poll, wait_msecs) // retry on error
      }
    }

    poll() // start polling

    return () => {
      isCancelled = true // stop future polling if component unmounts
    }
  }, [onData, apiCall, wait_msecs])

  return null // no UI rendering needed
}

export default PollingComponent
