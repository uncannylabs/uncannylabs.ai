import { Router } from 'express'
import OpenAI from 'openai'

const router = Router()
const openai = new OpenAI()

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    })

    res.json({ message: completion.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to process request' })
  }
})

export default router
