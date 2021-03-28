import { useCallback, useState } from 'react'

import { User } from '../types/api/user'
import { useMessage } from './loginMessage'

type Props = {
  id: number
  // tslint:disable-next-line: prefer-array-literal
  users: { users: Array<User> }
  onOpen: () => void
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const selectUser = () => {
  const { showMessage } = useMessage()

  const [selectedUser, setSelectedUser] = useState<User>()

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    // tslint:disable-next-line: ter-arrow-parens
    const targetUser = users.users.find((obj) => obj.id === id)
    if (!targetUser) {
      showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
      return
    }

    setSelectedUser(targetUser)
    onOpen()
  }, [])
  return { onSelectUser, selectedUser }
}
