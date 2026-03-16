import { useState } from 'react'
import { BubbleChat, FullPageChat } from 'flowise-embed-react'

type View = 'bubble' | 'fullpage'

function App() {
  const [view, setView] = useState<View>('bubble')

  // Replace with your Flowise chatflow ID and API host
  const chatflowId = 'flow-id'
  const apiHost = 'http://localhost:3000'

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Flowise Embed React Example</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setView('bubble')}
          style={{
            padding: '0.5rem 1rem',
            fontWeight: view === 'bubble' ? 'bold' : 'normal',
          }}
        >
          Bubble Chat
        </button>
        <button
          onClick={() => setView('fullpage')}
          style={{
            padding: '0.5rem 1rem',
            fontWeight: view === 'fullpage' ? 'bold' : 'normal',
          }}
        >
          Full Page Chat
        </button>
      </div>

      {view === 'bubble' && (
        <>
          <p>
            The bubble chat widget appears as a floating button in the bottom-right corner.
          </p>
          <BubbleChat
            chatflowid={chatflowId}
            apiHost={apiHost}
            theme={{
              button: {
                backgroundColor: '#3B81F6',
                size: 48,
                iconColor: 'white',
              },
              chatWindow: {
                welcomeMessage: 'Hello! How can I help you?',
                title: 'Flowise Bot',
              },
            }}
          />
        </>
      )}

      {view === 'fullpage' && (
        <>
          <p>The full page chat is embedded inline below.</p>
          <FullPageChat
            chatflowid={chatflowId}
            apiHost={apiHost}
            style={{ height: '600px', width: '100%' }}
            // @ts-ignore
            theme={{
              chatWindow: {
                welcomeMessage: 'Hello! How can I help you?',
                title: 'Flowise Bot',
              }
            }}
          />
        </>
      )}
    </div>
  )
}

export default App
