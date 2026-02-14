type SlackBlock = Record<string, unknown>;

interface NotifyOpsOptions {
  blocks?: SlackBlock[];
}

export async function notifyOps(text: string, options: NotifyOpsOptions = {}) {
  const token = process.env.SLACK_BOT_TOKEN
  const channel = process.env.SLACK_OPS_CHANNEL_ID
  if (!token || !channel) return
  try {
    const payload: Record<string, unknown> = { channel, text }
    if (options.blocks) payload.blocks = options.blocks
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {}
}
