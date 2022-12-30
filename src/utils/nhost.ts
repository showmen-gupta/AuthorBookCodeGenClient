import { NhostClient } from '@nhost/react'

const nhost = new NhostClient({
  subdomain: 'http://localhost:8080'
})

export { nhost }