import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { User } from '../types/api/user'
import { useMessage } from './loginMessage'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { showMessage } = useMessage()

  const login = useCallback(async (id: string) => {
    setLoading(true)
    try {
      const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      if (response.status === 404) {
        showMessage({ title: 'not login', status: 'error' })
        throw new Error('error')
      }
      if (response.status === 200) {
        showMessage({ title: 'login', status: 'success' })
        router.push('/')
      }
    } catch {
      showMessage({ title: 'not login', status: 'error' })
    }
    setLoading(false)
  }, [])

  return { login, loading }
}
