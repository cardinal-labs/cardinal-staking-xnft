import { useEffect } from 'react'
import { Tab, useMetadata, View } from 'react-xnft'
import { Text } from '../common/Text'
import { StakePoolMetadata } from '../config/config'
import { useStakePoolMetadata } from '../providers/StakePoolMetadataProvider'
import { ClaimRewards } from './ClaimRewards'
import { StakeUntake } from './StakeUnstake'

export function Pool({
  stakePoolMetadata,
}: {
  stakePoolMetadata: StakePoolMetadata
}) {
  const { setStakePoolMetadata } = useStakePoolMetadata()
  const theme = useMetadata()
  useEffect(() => {
    if (stakePoolMetadata) {
      setStakePoolMetadata(stakePoolMetadata)
    }
  }, [stakePoolMetadata.name])
  return (
    <View style={{ height: '100%' }}>
      <Tab.Navigator
        style={{}}
        options={({ route }) => {
          return {
            tabBarStyle: {
              background: theme.isDarkMode ? '#333' : '#CCC',
              cursor: 'pointer',
            },
            tabBarActiveTintColor: '#401a2f',
            tabBarInactiveTintColor: theme.isDarkMode ? '#111' : '#EEE',
            tabBarIcon: () => {
              if (route.name === 'stake') {
                return (
                  <Tab.Icon
                    element={
                      <View>
                        <Text>Stake</Text>
                      </View>
                    }
                  />
                )
              } else {
                return (
                  <Tab.Icon
                    element={
                      <View>
                        <Text>Claim</Text>
                      </View>
                    }
                  />
                )
              }
            },
          }
        }}
      >
        <Tab.Screen
          name="claim"
          disableLabel={true}
          component={() => <ClaimRewards />}
        />
        <Tab.Screen
          name="stake"
          disableLabel={true}
          component={() => <StakeUntake />}
        />
      </Tab.Navigator>
    </View>
  )
}
