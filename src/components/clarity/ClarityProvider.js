'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

export default function ClarityProvider () {
  useEffect(() => {
    const projectId = 'pl5x63xp77'
    Clarity.init(projectId)
  }, [])

  return null
}
