'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Memo {
  id: number
  text: string
}

export default function MemoList() {
  const [memos, setMemos] = useState<Memo[]>([])
  const [newMemo, setNewMemo] = useState('')

  const addMemo = () => {
    if (newMemo.trim()) {
      setMemos([{ id: Date.now(), text: newMemo }, ...memos])
      setNewMemo('')
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Write a new memo"
        value={newMemo}
        onChange={(e) => setNewMemo(e.target.value)}
        className="min-h-[100px]"
      />
      <Button onClick={addMemo}>Save Memo</Button>
      <ScrollArea className="h-[300px]">
        <ul className="space-y-4">
          {memos.map(memo => (
            <li key={memo.id} className="bg-muted p-3 rounded-md">
              <p className="whitespace-pre-wrap">{memo.text}</p>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}

