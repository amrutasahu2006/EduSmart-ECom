import { useState } from 'react'

export default function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')
  const [chatHistory, setChatHistory] = useState([
    { type: 'received', text: 'Hi there! I\'m your EduSmart support assistant. How can I help you today? 😊' },
    { type: 'sent', text: 'How do I download my certificate?' },
    { type: 'received', text: 'Sure! Go to My Courses → Completed → click "Download Certificate". It\'ll be ready as a PDF. 🎓' },
  ])

  const sendChat = () => {
    if (!chatMsg.trim()) return
    setChatHistory(h => [...h, { type: 'sent', text: chatMsg }])
    const reply = chatMsg.toLowerCase().includes('course')
      ? 'I can help you find the perfect course! Try browsing our Courses page or tell me your interests. 📚'
      : 'Thanks for reaching out! Our team will follow up within 2 hours. Anything else I can help with? ✨'
    setTimeout(() => setChatHistory(h => [...h, { type: 'received', text: reply }]), 800)
    setChatMsg('')
  }

  return (
    <div className="floating-chat-widget">
      {chatOpen && (
        <div className="crm-card chat-popup" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="chat-window" style={{ border: 'none', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="chat-header">
              <div className="chat-dot" />
              Support Chat — Online
            </div>
            <div className="chat-body" style={{ maxHeight: '400px', overflowY: 'auto', flex: 1 }}>
              {chatHistory.map((m, i) => (
                <div key={i} className={`chat-msg ${m.type}`}>{m.text}</div>
              ))}
            </div>
            <div className="chat-input-row" style={{ background: 'var(--bg)' }}>
              <input
                className="chat-input"
                value={chatMsg}
                onChange={e => setChatMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendChat()}
                placeholder="Type a message..."
              />
              <button className="btn btn-teal btn-sm" onClick={sendChat}>Send</button>
            </div>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? '✖' : '💬'}
      </button>
    </div>
  )
}
