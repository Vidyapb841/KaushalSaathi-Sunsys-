"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Calendar, Search, Download, Eye, Trash2 } from "lucide-react"

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [filteredMessages, setFilteredMessages] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<any>(null)

  useEffect(() => {
    // Load contact messages
    const contactMessages = JSON.parse(localStorage.getItem("kaushalsaathi_contact_messages") || "[]")
    setMessages(contactMessages.reverse()) // Show newest first
    setFilteredMessages(contactMessages.reverse())
  }, [])

  useEffect(() => {
    // Filter messages based on search term
    const filtered = messages.filter(
      (message) =>
        message.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.interest.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredMessages(filtered)
  }, [searchTerm, messages])

  const exportToCSV = () => {
    const csvContent = [
      ["Name", "Email", "Phone", "Interest", "Message", "Date", "Status"],
      ...messages.map((msg) => [
        msg.fullName,
        msg.email,
        msg.phone,
        msg.interest || "General Inquiry",
        msg.message.replace(/,/g, ";"), // Replace commas to avoid CSV issues
        new Date(msg.submittedAt).toLocaleDateString(),
        msg.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `kaushalsaathi-contact-messages-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const markAsRead = (messageId: string) => {
    const updatedMessages = messages.map((msg) => (msg.id === messageId ? { ...msg, status: "read" } : msg))
    setMessages(updatedMessages)
    localStorage.setItem("kaushalsaathi_contact_messages", JSON.stringify(updatedMessages.reverse()))
  }

  const deleteMessage = (messageId: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      const updatedMessages = messages.filter((msg) => msg.id !== messageId)
      setMessages(updatedMessages)
      localStorage.setItem("kaushalsaathi_contact_messages", JSON.stringify(updatedMessages.reverse()))
      setSelectedMessage(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Contact Messages</h1>
            <p className="text-muted-foreground">
              Admin panel for managing contact form submissions (vidyapb2004@gmail.com)
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Messages List */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Messages ({filteredMessages.length})</CardTitle>
                    <div className="flex gap-2">
                      <Button onClick={exportToCSV} variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export CSV
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredMessages.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No messages found</p>
                    </div>
                  ) : (
                    filteredMessages.map((message) => (
                      <Card
                        key={message.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedMessage?.id === message.id ? "border-primary" : ""
                        } ${message.status === "new" ? "border-l-4 border-l-primary" : ""}`}
                        onClick={() => setSelectedMessage(message)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{message.fullName}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant={message.status === "new" ? "default" : "secondary"}>
                                {message.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {new Date(message.submittedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{message.email}</p>
                          <p className="text-sm line-clamp-2">{message.message}</p>
                          {message.interest && (
                            <Badge variant="outline" className="mt-2 text-xs">
                              {message.interest}
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Message Details */}
            <div className="space-y-4">
              {selectedMessage ? (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Message Details</CardTitle>
                      <div className="flex gap-2">
                        {selectedMessage.status === "new" && (
                          <Button onClick={() => markAsRead(selectedMessage.id)} variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Mark Read
                          </Button>
                        )}
                        <Button onClick={() => deleteMessage(selectedMessage.id)} variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedMessage.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(selectedMessage.submittedAt).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {selectedMessage.interest && (
                      <div>
                        <h4 className="font-semibold mb-2">Course Interest</h4>
                        <Badge variant="outline">{selectedMessage.interest}</Badge>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">Message</h4>
                      <div className="bg-muted p-3 rounded-md text-sm">
                        {selectedMessage.message || "No message provided"}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button asChild className="w-full">
                        <a href={`mailto:${selectedMessage.email}?subject=Re: Your inquiry about KaushalSaathi`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Reply via Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a message to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
