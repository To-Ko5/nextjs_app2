import axios from 'axios'

import { User } from '../types/api/user'

export const getAllUsers = async () => {
  try {
    // tslint:disable-next-line: prefer-array-literal
    const response = await axios.get<Array<User>>(
      'https://jsonplaceholder.typicode.com/users'
    )

    if (response.status === 400) {
      throw new Error('error')
    }
    return response.data
  } catch {
    throw new Error('error')
  }
}
