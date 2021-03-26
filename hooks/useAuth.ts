import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { User } from '../types/api/user'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const login = useCallback(async (id: string) => {
    setLoading(true)
    try {
      const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      if (response.status === 404) {
        throw new Error('error')
      }
      if (response.status === 200) {
        router.push('/')
      }
    } catch {
      alert('not login')
    }
    setLoading(false)
  }, [])

  return { login, loading }
}
