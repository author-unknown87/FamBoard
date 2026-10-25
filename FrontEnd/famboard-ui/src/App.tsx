import { useState } from 'react'
import LandingPage from './LandingPage/LandingPage'
import { DinnersView } from './DinnersView/DinnersView'
import SnacksView from './SnacksView/SnacksView'

type AppView = 'landing' | 'dinners' | 'snacks'

interface NavigationState {
  current: AppView
  history: AppView[]
}

const menuToView: Partial<Record<string, AppView>> = {
  Dinners: 'dinners',
  Snacks: 'snacks',
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    current: 'landing',
    history: [],
  })

  function navigateTo(view: AppView) {
    setNavigation((previous) => {
      if (previous.current === view) {
        return previous
      }

      return {
        current: view,
        history: [...previous.history, previous.current],
      }
    })
  }

  function goBack() {
    setNavigation((previous) => {
      if (previous.history.length === 0) {
        return previous
      }

      const history = [...previous.history]
      const current = history.pop() as AppView

      return {
        current,
        history,
      }
    })
  }

  if (navigation.current === 'dinners') {
    return <DinnersView onBack={navigation.history.length > 0 ? goBack : undefined} />
  }

  if (navigation.current === 'snacks') {
    return <SnacksView onBack={navigation.history.length > 0 ? goBack : undefined} />
  }

  return <LandingPage onMenuSelect={(item) => navigateTo(menuToView[item] ?? 'landing')} />
}

export default App
