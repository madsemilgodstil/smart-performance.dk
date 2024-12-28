'use client'

import { useEffect } from 'react'
import Clarity from 'clarity-js'

export default function ClarityProvider () {
  useEffect(() => {
    const projectId = 'pl5x63xp77'
    Clarity.init(projectId)
  }, [])

  return null
}
