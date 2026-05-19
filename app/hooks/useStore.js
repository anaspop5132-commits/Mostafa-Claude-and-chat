import { useState } from 'react'
import {
  INITIAL_USERS,
  INITIAL_COURSES,
  INITIAL_LECTURES,
  INITIAL_PAYMENTS,
  INITIAL_COUPONS,
} from '@/data'

export default function useStore() {
  const [users, setUsers] = useState(INITIAL_USERS)
  const [courses, setCourses] = useState(INITIAL_COURSES)
  const [lectures, setLectures] = useState(INITIAL_LECTURES)
  const [payments, setPayments] = useState(INITIAL_PAYMENTS)
  const [coupons, setCoupons] = useState(INITIAL_COUPONS)

  return {
    users,
    setUsers,
    courses,
    setCourses,
    lectures,
    setLectures,
    payments,
    setPayments,
    coupons,
    setCoupons,
  }
}
