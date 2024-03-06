// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes.tsx'

// import { AppHeader } from './cmps/AppHeader.tsx'
// import { AppFooter } from './cmps/AppFooter.tsx'
// import { UserMsg } from './cmps/UserMsg.tsx'

// import { useModal } from './customHooks/ModalContext'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="main-container">
    {/* <AppHeader /> */}
    {/* <div className="dimmed-content" style={dimmerStyle}></div> */}
    {/* <UserMsg /> */}
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          // element={<route.component onFooterUpdate={updateFooterPosition} />}
        />
      ))}
    </Routes>
    {/* <AppFooter position={footerPosition} /> */}
  </main>
  )
}


