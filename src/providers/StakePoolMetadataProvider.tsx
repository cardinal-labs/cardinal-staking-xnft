import { useQueryClient } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { StakePoolMetadata } from '../config/config'

export interface StakePoolMetadataValues {
  stakePoolMetadata: StakePoolMetadata | null
  setStakePoolMetadata: (stakePoolMetadata: StakePoolMetadata | null) => void
}

const EnvironmentContext: React.Context<null | StakePoolMetadataValues> =
  React.createContext<null | StakePoolMetadataValues>(null)

export function StakePoolMetadataProvider({
  children,
}: {
  children: React.ReactChild
}) {
  const queryClient = useQueryClient()
  const [stakePoolMetadata, setStakePoolMetadata] =
    useState<StakePoolMetadata | null>(null)
  return (
    <EnvironmentContext.Provider
      value={{
        stakePoolMetadata,
        setStakePoolMetadata: (x) => {
          queryClient.removeQueries(), setStakePoolMetadata(x)
        },
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  )
}

export function useStakePoolMetadata(): StakePoolMetadataValues {
  const context = useContext(EnvironmentContext)
  if (!context) {
    throw new Error('Missing stakePoolMetadata context')
  }
  return context
}
