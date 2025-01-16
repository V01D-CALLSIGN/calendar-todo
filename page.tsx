'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TodoList from '@/components/todo-list'
import MemoList from '@/components/memo-list'

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <main className="min-h-screen bg-jungle bg-cover bg-center bg-no-repeat flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-background/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Jungle Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Tabs defaultValue="todo">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="todo">To-Do</TabsTrigger>
                  <TabsTrigger value="memo">Memos</TabsTrigger>
                </TabsList>
                <TabsContent value="todo">
                  <TodoList />
                </TabsContent>
                <TabsContent value="memo">
                  <MemoList />
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

