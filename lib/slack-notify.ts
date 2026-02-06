export async function notifyOps(text: string) {
  const token = process.env.SLACK_BOT_TOKEN
  const channel = process.env.SLACK_OPS_CHANNEL_ID
  if (!token || !channel) return
  try {
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ channel, text }),
    })
  } catch {}
}
