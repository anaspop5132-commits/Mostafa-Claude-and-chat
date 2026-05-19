import { useState } from 'react'

export default function useAuth(users) {
  const [currentUser, setCurrentUser] = useState(null)

  const login = (email, password) => {
    const user = users.find(
      u => u.email === email && u.password === password
    )

    if (!user) {
      return {
        success: false,
        error: 'بيانات الدخول غير صحيحة',
      }
    }

    setCurrentUser(user)

    return {
      success: true,
      user,
    }
  }

  return {
    currentUser,
    login,
    setCurrentUser,
  }
}
