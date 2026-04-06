import { useState } from 'react'

const paymentModes = [
  { icon: '🔵', name: 'UPI', desc: 'Unified Payments Interface', details: 'Instant transfers, 24×7 available' },
  { icon: '💳', name: 'Debit/Credit Card', desc: 'Visa, Mastercard, RuPay', details: 'Secured with EMV chip & PIN' },
  { icon: '🏦', name: 'Net Banking', desc: 'NEFT / IMPS', details: 'Direct bank transfers' },
]

export default function Checkout() {
  const [plan, setPlan] = useState({ name: 'Premium', price: 999 })
  const [selectedMode, setSelectedMode] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      setTransactionId(`TXN${Math.random().toString(36).substr(2, 9).toUpperCase()}`)
      setTimeout(() => {
        setIsSuccess(false)
        setSelectedMode('')
        setPlan({ name: 'Premium', price: 999 })
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">💳 Secure Payment</div>
          <h1>Checkout</h1>
          <p>Complete your purchase with our secure, RBI-compliant payment system</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="checkout-layout">
            
            {/* Order Summary */}
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>📋 Order Summary</div>
              <div className="checkout-panel">
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 8 }}>Plan</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{plan.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: 4 }}>
                    Unlimited courses • HD downloads • 1-on-1 mentoring
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ color: 'var(--text-light)' }}>Subscription</span>
                    <span style={{ fontWeight: '600' }}>₹{plan.price.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ color: 'var(--text-light)' }}>GST (18%)</span>
                    <span style={{ fontWeight: '600' }}>₹{Math.round(plan.price * 0.18).toLocaleString()}</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Total Amount</span>
                    <span style={{ fontWeight: '700', fontSize: '1.3rem', color: 'var(--accent)' }}>₹{Math.round(plan.price * 1.18).toLocaleString()}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-alt)', padding: 16, borderRadius: 8, marginTop: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>✅ 7-day free trial • Cancel anytime</div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>💳 Payment Method</div>
              <div className="checkout-panel">
                
                {!isSuccess ? (
                  <>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ fontSize: '0.95rem', fontWeight: '600', display: 'block', marginBottom: 12, color: 'var(--text)' }}>
                        Select Payment Mode
                      </label>
                      <div className="payment-mode-list">
                        {paymentModes.map(pm => (
                          <button
                            key={pm.name}
                            type="button"
                            onClick={() => setSelectedMode(pm.name)}
                            className={`payment-mode-btn${selectedMode === pm.name ? ' active' : ''}`}
                            aria-pressed={selectedMode === pm.name}
                          >
                            <div className="payment-mode-btn-inner">
                              <span className="payment-mode-icon">{pm.icon}</span>
                              <div>
                                <div className="payment-mode-name">{pm.name}</div>
                                <div className="payment-mode-desc">{pm.details}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* UPI QR Code */}
                    {selectedMode === 'UPI' && (
                      <div style={{ background: 'var(--bg-alt)', padding: 24, borderRadius: 16, marginBottom: 20, textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 12 }}>
                          📱 Scan with UPI App
                        </div>
                        <div className="checkout-qr">
                          📲
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                          Use Google Pay, PhonePe, or your bank app
                        </div>
                      </div>
                    )}

                    {/* Card Details (for Card mode) */}
                    {selectedMode === 'Debit/Credit Card' && (
                      <div style={{ marginBottom: 20 }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: 8, color: 'var(--text-light)' }}>
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="4532 1234 5678 9010"
                          className="checkout-input"
                          style={{ marginBottom: 12, fontFamily: 'monospace' }}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: 8, color: 'var(--text-light)' }}>
                              Expiry
                            </label>
                            <input type="text" placeholder="MM/YY" className="checkout-input" />
                          </div>
                          <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: 8, color: 'var(--text-light)' }}>
                              CVV
                            </label>
                            <input type="text" placeholder="***" maxLength="3" className="checkout-input" />
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handlePayment}
                      disabled={!selectedMode || isProcessing}
                      className="checkout-primary-btn"
                    >
                      {isProcessing ? '⏳ Processing...' : `💳 Pay ₹${Math.round(plan.price * 1.18).toLocaleString()}`}
                    </button>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center', marginTop: 16 }}>
                      🔒 PCI DSS Level 1 • RBI Approved • AES-256 Encryption
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: 12 }}>
                      Payment Successful!
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: 16 }}>
                      Transaction ID: {transactionId}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                      Your Premium subscription is now active. Redirecting to dashboard...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="section" style={{ background: 'var(--bg-alt)', paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔒</div>
              <div style={{ fontWeight: '600', marginBottom: 4 }}>Encrypted</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>AES-256 SSL/TLS</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>✅</div>
              <div style={{ fontWeight: '600', marginBottom: 4 }}>PCI DSS</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Level 1 Certified</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>🇮🇳</div>
              <div style={{ fontWeight: '600', marginBottom: 4 }}>RBI Compliant</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>2FA Mandated</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>💳</div>
              <div style={{ fontWeight: '600', marginBottom: 4 }}>Tokenised</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>No Raw Data Stored</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 40, textAlign: 'center' }}>
            <div className="section-label">❓ Payment FAQs</div>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">Is my payment secure?</div>
              <div className="viva-a">Yes. All payments are encrypted with AES-256 and processed through PCI DSS Level 1 certified gateways (Razorpay/Stripe). No raw card details are stored on EduSmart servers. We comply with all RBI payment security mandates.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">What is 2FA and is it required?</div>
              <div className="viva-a">Two-Factor Authentication adds an OTP or UPI PIN verification to payments. It's mandatory per RBI guidelines for all UPI and card transactions. This protects against unauthorized transactions.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">Can I change my payment method?</div>
              <div className="viva-a">Yes. You can update your payment method in account settings anytime. For recurring subscriptions, new transactions will use the updated method. Card tokenisation ensures past tokens remain inactive.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">What if a payment fails?</div>
              <div className="viva-a">If a payment fails, you'll receive an SMS/email within 5 minutes. Your account won't be charged. We retry failed payments up to 2 times. You can retry manually from the dashboard or contact support.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">Is there a refund policy?</div>
              <div className="viva-a">Yes. Full refund within 7 days of purchase if you haven't taken courses. Partial refund (80%) available up to 30 days. After 30 days, no refunds but you keep subscription access until renewal date.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">How are transaction records kept?</div>
              <div className="viva-a">Monthly statements and transaction history are available in your account dashboard. Payment details are encrypted and stored in India per DPDP Act data localisation rules. You can download invoices anytime.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
