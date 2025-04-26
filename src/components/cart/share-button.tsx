"use client"

import { useState } from "react"
import { Share2, Copy, Check, Facebook, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
// import { toast } from "@/components/ui/use-toast"

interface ShareButtonProps {
  url?: string
  title?: string
  description?: string
  image?: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  iconOnly?: boolean
}

export default function ShareButton({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Check out this product",
  description = "I found this amazing product I thought you might like",
  image = "",
  variant = "outline",
  size = "icon",
  className = "",
  iconOnly = true,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const fullUrl = typeof window !== "undefined" ? url || window.location.href : url

  // Function to handle Web Share API
  const handleShare = async () => {
    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: fullUrl,
        })
        // toast({
        //   title: "Shared successfully",
        //   description: "The content has been shared",
        // })
      } catch (error) {
        // User cancelled or share failed
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error)
          setShowShareDialog(true)
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      setShowShareDialog(true)
    }
  }

  // Function to copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(
      () => {
        setCopied(true)
        // toast({
        //   title: "Link copied",
        //   description: "The link has been copied to your clipboard",
        // })
        setTimeout(() => setCopied(false), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  // Share URLs for different platforms
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${fullUrl}`)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${fullUrl}`)}`,
  }

  // Function to open share URL in a popup window
  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400")
  }

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={handleShare} aria-label="Share">
        <Share2 className={iconOnly ? "h-5 w-5" : "h-5 w-5 mr-2"} />
        {!iconOnly && "Share"}
      </Button>

      {/* Share Dialog for fallback */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Comparte este producto</DialogTitle>
            <DialogDescription>
                Elige cómo compartir este producto con tus amigos y colegas
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
              onClick={() => openShareWindow(shareUrls.facebook)}
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
              onClick={() => openShareWindow(shareUrls.twitter)}
            >
              <Twitter className="h-5 w-5 text-blue-400" />
              Twitter
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
              onClick={() => window.open(shareUrls.whatsapp)}
            >
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
              onClick={() => window.open(shareUrls.email)}
            >
              <Mail className="h-5 w-5 text-gray-600" />
              Email
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <div className="flex items-center border rounded-md pl-3 pr-1 py-1">
                <span className="text-sm text-gray-600 truncate flex-1">{fullUrl}</span>
                <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-2 text-gray-600">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

