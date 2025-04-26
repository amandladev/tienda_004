"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { formatPrice } from "@/lib/utils"
import { ShoppingBag, CreditCardIcon, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react"
import Navbar from "@/components/ui/navbar/Navbar"
import Image from "next/image"
import Link from "next/link"

// Define checkout steps
const CHECKOUT_STEPS = [
  { id: "information", label: "Información" },
  { id: "shipping", label: "Envío" },
  { id: "payment", label: "Pago" },
  { id: "confirmation", label: "Confirmación" },
]

// Shipping methods
const SHIPPING_METHODS = [
  { id: "standard", label: "Standard Shipping", price: 5.99, deliveryTime: "3-5 business days" },
  { id: "express", label: "Express Shipping", price: 12.99, deliveryTime: "1-2 business days" },
  { id: "overnight", label: "Overnight Shipping", price: 24.99, deliveryTime: "Next business day" },
]

// Payment methods
const PAYMENT_METHODS = [
  { id: "credit-card", label: "Credit Card", icon: CreditCardIcon },
  {
    id: "paypal",
    label: "PayPal",
    icon: () => (
      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-1.384-1.028-3.63-1.207-6.21-1.207H9.11c-.178 0-.335.119-.366.291L6.596 17.97c-.008.044.005.088.035.123.03.036.073.056.12.056h3.233c.178 0 .336-.119.366-.292l.79-5.007c.031-.173.188-.291.366-.291h1.582c4.011 0 6.334-1.616 7.066-6.111.309-1.903.154-3.473-.932-4.53z" />
        <path d="M20.887 7.981c-.716 4.767-3.99 7.295-8.862 7.295h-1.756c-.524 0-.968.382-1.05.9l-1.12 7.106c-.06.371.213.709.586.709h4.606c.524 0 .968-.382 1.05-.9l.789-4.989c.083-.519.526-.9 1.05-.9h1.756c4.873 0 8.146-2.528 8.862-7.295.36-2.389-.028-4.273-1.9-5.637 1.9 1.363 2.28 3.247 1.989 5.637v-.926z" />
      </svg>
    ),
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.72 7.39c.96 0 1.78-.5 2.13-1.33-.94-.11-1.76-.89-2.07-1.89-.06-.2-.1-.4-.1-.62 0-.19.03-.38.08-.56-.73.05-1.39.52-1.72 1.19-.18.36-.3.77-.3 1.18 0 .19.03.38.08.56.37.26.82.47 1.9.47zm1.51 1.39c-1.32 0-2.5.62-3.15 1.56.37.59.59 1.27.59 2 0 .97-.37 1.9-1.04 2.6.2.25.42.48.67.67.36.28.75.5 1.18.64.42.14.88.21 1.35.21.42 0 .84-.06 1.23-.18-.07-.47-.1-.95-.1-1.43 0-1.97.71-3.84 1.97-5.3-.8-.49-1.71-.77-2.7-.77zm-5.94 7.83c-.55-.46-1.27-.77-2.05-.84-.09-.01-.19-.01-.28-.01-1.01 0-1.93.38-2.62 1.01-.69.63-1.15 1.5-1.23 2.5v.12c0 .08.01.16.02.24.14 1.25.86 2.31 1.87 2.92.57.35 1.24.55 1.96.55.1 0 .2 0 .3-.01.78-.07 1.5-.38 2.05-.84-.47-.71-.75-1.55-.75-2.46 0-.91.28-1.75.75-2.46-.01-.4-.01-.81-.02-1.22zm5.94-4.44c-2.28 0-4.12 1.84-4.12 4.12 0 2.27 1.84 4.12 4.12 4.12 2.27 0 4.12-1.84 4.12-4.12 0-2.28-1.85-4.12-4.12-4.12zm-10.28 0c-2.28 0-4.12 1.84-4.12 4.12 0 2.27 1.84 4.12 4.12 4.12 2.27 0 4.12-1.84 4.12-4.12 0-2.28-1.85-4.12-4.12-4.12z" />
      </svg>
    ),
  },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart, isLoaded } = useCart()
  const [currentStep, setCurrentStep] = useState(CHECKOUT_STEPS[0].id)
  const [shippingMethod, setShippingMethod] = useState(SHIPPING_METHODS[0].id)
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0].id)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
    sameAsBilling: true,
    saveInfo: false,
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "United States",
  })

  // Form validation
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Calculate totals
  const shippingCost = SHIPPING_METHODS.find((method) => method.id === shippingMethod)?.price || 0
  const tax = subtotal * 0.07 // 7% tax rate
  const total = subtotal + shippingCost + tax

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Validate current step
  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (currentStep === "information") {
      if (!formData.email) newErrors.email = "Email es requerido"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email es inválido"

      if (!formData.firstName) newErrors.firstName = "Complete su nombre"
      if (!formData.lastName) newErrors.lastName = "Complete sus apellidos"
      if (!formData.address) newErrors.address = "Address es requerido"
      if (!formData.city) newErrors.city = "City es requerido"
      if (!formData.state) newErrors.state = "State es requerido"
      if (!formData.zipCode) newErrors.zipCode = "ZIP code es requerido"
      if (!formData.phone) newErrors.phone = "Phone number es requerido"
    } else if (currentStep === "payment") {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number es requerido"
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
        newErrors.cardNumber = "Card number must be 16 digits"

      if (!formData.cardName) newErrors.cardName = "Name on card es requerido"

      if (!formData.expiryDate) newErrors.expiryDate = "Expiry date es requerido"
      else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = "Expiry date must be in MM/YY format"

      if (!formData.cvv) newErrors.cvv = "CVV es requerido"
      else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits"

      if (!formData.sameAsBilling) {
        if (!formData.billingAddress) newErrors.billingAddress = "Billing address es requerido"
        if (!formData.billingCity) newErrors.billingCity = "Billing city es requerido"
        if (!formData.billingState) newErrors.billingState = "Billing state es requerido"
        if (!formData.billingZipCode) newErrors.billingZipCode = "Billing ZIP code es requerido"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle next step
  const handleNextStep = () => {
    if (!validateStep()) return

    const currentIndex = CHECKOUT_STEPS.findIndex((step) => step.id === currentStep)
    if (currentIndex < CHECKOUT_STEPS.length - 1) {
      setCurrentStep(CHECKOUT_STEPS[currentIndex + 1].id)
      window.scrollTo(0, 0)
    }
  }

  // Handle previous step
  const handlePreviousStep = () => {
    const currentIndex = CHECKOUT_STEPS.findIndex((step) => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(CHECKOUT_STEPS[currentIndex - 1].id)
      window.scrollTo(0, 0)
    }
  }

  // Handle place order
  const handlePlaceOrder = async () => {
    if (!validateStep()) return

    setIsProcessing(true)

    try {
      // Simulate API call to process order
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate random order number
      const randomOrderNumber = Math.floor(100000000 + Math.random() * 900000000).toString()
      setOrderNumber(randomOrderNumber)

      // Clear cart and show confirmation
      clearCart()
      setOrderComplete(true)
      setCurrentStep("confirmation")
      window.scrollTo(0, 0)
    } catch (error) {
      console.error("Error processing order:", error)
      // Handle error
    } finally {
      setIsProcessing(false)
    }
  }

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Handle card number input
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value)
    setFormData((prev) => ({ ...prev, cardNumber: formattedValue }))

    if (errors.cardNumber) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.cardNumber
        return newErrors
      })
    }
  }

  // Check if cart is empty
  useEffect(() => {
    // Only redirect if the cart is empty AND we've confirmed the cart has loaded
    if (items.length === 0 && !orderComplete && isLoaded) {
      router.push("/cart")
    }
  }, [items.length, orderComplete, router, isLoaded])

  if (items.length === 0 && !orderComplete && isLoaded) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-4 text-2xl font-medium text-gray-900">Tu carrito está vacío</h2>
            <p className="mt-2 text-gray-500">Agrega algunos productos a tu carrito para continuar con la compra.</p>
            <div className="mt-6">
              <Link href="/store">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continuar comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Add a loading state while cart is being checked
  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
            <h2 className="mt-4 text-xl font-medium text-gray-700">Loading your cart...</h2>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="hidden sm:block">
            <nav className="flex items-center justify-center" aria-label="Progress">
              <ol className="flex items-center space-x-8">
                {CHECKOUT_STEPS.map((step, stepIdx) => (
                  <li key={step.id} className="relative">
                    {currentStep === step.id ? (
                      <div className="flex items-center" aria-current="step">
                        <span className="absolute flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary">
                          <CheckCircle2 className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        <span className="ml-10 text-sm font-bold text-primary">{step.label}</span>
                      </div>
                    ) : stepIdx < CHECKOUT_STEPS.findIndex((s) => s.id === currentStep) ? (
                      <div className="flex items-center">
                        <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                          <CheckCircle2 className="h-5 w-5 text-greenNew" aria-hidden="true" />
                        </span>
                        <span className="ml-10 text-sm font-bold text-greenNew">{step.label}</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="absolute flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300">
                          <span className="text-sm text-gray-500">{stepIdx + 1}</span>
                        </span>
                        <span className="ml-10 text-sm font-medium text-gray-500">{step.label}</span>
                      </div>
                    )}

                    {/* {stepIdx !== CHECKOUT_STEPS.length - 1 ? (
                      <div className="absolute top-4 right-0 hidden h-0.5 w-16 bg-gray-200 sm:block" />
                    ) : null} */}
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="sm:hidden">
            <p className="text-sm font-medium text-gray-500">
              Step {CHECKOUT_STEPS.findIndex((step) => step.id === currentStep) + 1} of {CHECKOUT_STEPS.length}
            </p>
            <h3 className="mt-1 text-xl font-medium text-gray-900">
              {CHECKOUT_STEPS.find((step) => step.id === currentStep)?.label}
            </h3>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Main Content */}
          <div className="lg:col-span-7">
            {/* Information Step */}
            {currentStep === "information" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Información de contacto</h2>
                  <div className="mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900">Información de envio</h2>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.firstName ? "border-red-500" : ""}`}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.lastName ? "border-red-500" : ""}`}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.address ? "border-red-500" : ""}`}
                      />
                      {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.city ? "border-red-500" : ""}`}
                      />
                      {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                    </div>

                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.state ? "border-red-500" : ""}`}
                      />
                      {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                    </div>

                    <div>
                      <Label htmlFor="zipCode">ZIP / Postal code</Label>
                      <Input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.zipCode ? "border-red-500" : ""}`}
                      />
                      {errors.zipCode && <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>}
                    </div>

                    <div>
                      <Label htmlFor="country">Country</Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, saveInfo: checked as boolean }))}
                  />
                  <Label htmlFor="saveInfo" className="text-sm font-normal cursor-pointer">
                    Save this information for next time
                  </Label>
                </div> */}

                <div className="flex justify-end">
                  <Button onClick={handleNextStep}>
                    Continuar con el envío
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Shipping Step */}
            {currentStep === "shipping" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Shipping method</h2>
                  <div className="mt-4 space-y-4">
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      {SHIPPING_METHODS.map((method) => (
                        <div key={method.id} className="flex items-center justify-between border rounded-md p-4">
                          <div className="flex items-center">
                            <RadioGroupItem value={method.id} id={method.id} />
                            <Label htmlFor={method.id} className="ml-3 cursor-pointer">
                              <div>
                                <span className="font-medium text-gray-900">{method.label}</span>
                                <p className="text-sm text-gray-500">{method.deliveryTime}</p>
                              </div>
                            </Label>
                          </div>
                          <span className="text-gray-900 font-medium">{formatPrice(method.price)}</span>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retroceder
                  </Button>
                  <Button onClick={handleNextStep}>
                    Continuar con el pago
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Payment Step */}
            {currentStep === "payment" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Payment method</h2>
                  <div className="mt-4 space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      {PAYMENT_METHODS.map((method) => (
                        <div key={method.id} className="flex items-center border rounded-md p-4">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <Label htmlFor={method.id} className="ml-3 flex items-center cursor-pointer">
                            {method.icon && <method.icon className="h-5 w-5 mr-2" />}
                            <span className="font-medium text-gray-900">{method.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Card details</h3>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div className="sm:col-span-2">
                        <Label htmlFor="cardNumber">Card number</Label>
                        <Input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          className={`mt-1 ${errors.cardNumber ? "border-red-500" : ""}`}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="cardName">Name on card</Label>
                        <Input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.cardName ? "border-red-500" : ""}`}
                          placeholder="John Doe"
                        />
                        {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="expiryDate">Expiry date (MM/YY)</Label>
                        <Input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.expiryDate ? "border-red-500" : ""}`}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
                      </div>

                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.cvv ? "border-red-500" : ""}`}
                          placeholder="123"
                          maxLength={4}
                        />
                        {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAsBilling"
                      name="sameAsBilling"
                      checked={formData.sameAsBilling}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, sameAsBilling: checked as boolean }))
                      }
                    />
                    <Label htmlFor="sameAsBilling" className="text-sm font-normal cursor-pointer">
                      Billing address is the same as shipping address
                    </Label>
                  </div>

                  {!formData.sameAsBilling && (
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div className="sm:col-span-2">
                        <Label htmlFor="billingAddress">Billing address</Label>
                        <Input
                          type="text"
                          id="billingAddress"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.billingAddress ? "border-red-500" : ""}`}
                        />
                        {errors.billingAddress && <p className="mt-1 text-sm text-red-500">{errors.billingAddress}</p>}
                      </div>

                      <div>
                        <Label htmlFor="billingCity">City</Label>
                        <Input
                          type="text"
                          id="billingCity"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.billingCity ? "border-red-500" : ""}`}
                        />
                        {errors.billingCity && <p className="mt-1 text-sm text-red-500">{errors.billingCity}</p>}
                      </div>

                      <div>
                        <Label htmlFor="billingState">State / Province</Label>
                        <Input
                          type="text"
                          id="billingState"
                          name="billingState"
                          value={formData.billingState}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.billingState ? "border-red-500" : ""}`}
                        />
                        {errors.billingState && <p className="mt-1 text-sm text-red-500">{errors.billingState}</p>}
                      </div>

                      <div>
                        <Label htmlFor="billingZipCode">ZIP / Postal code</Label>
                        <Input
                          type="text"
                          id="billingZipCode"
                          name="billingZipCode"
                          value={formData.billingZipCode}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.billingZipCode ? "border-red-500" : ""}`}
                        />
                        {errors.billingZipCode && <p className="mt-1 text-sm text-red-500">{errors.billingZipCode}</p>}
                      </div>

                      <div>
                        <Label htmlFor="billingCountry">Country</Label>
                        <select
                          id="billingCountry"
                          name="billingCountry"
                          value={formData.billingCountry}
                          onChange={(e) => setFormData((prev) => ({ ...prev, billingCountry: e.target.value }))}
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to shipping
                  </Button>
                  <Button onClick={handlePlaceOrder} disabled={isProcessing}>
                    {isProcessing ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Place order"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Confirmation Step */}
            {currentStep === "confirmation" && (
              <div className="text-center py-16">
                <div className="rounded-full bg-green-100 p-3 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mt-6 text-2xl font-medium text-gray-900">Thank you for your order!</h2>
                <p className="mt-2 text-gray-500">Your order #{orderNumber} has been placed successfully.</p>
                <p className="mt-1 text-gray-500">Le hemos enviado un correo {formData.email}.</p>
                <div className="mt-8">
                  <Link href="/">
                    <Button>Continue shopping</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900">Resumen de compra</h2>

              {currentStep !== "confirmation" && (
                <ul className="mt-6 divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Cantidad: {item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="text-base font-medium text-gray-900">{formatPrice(subtotal)}</div>
                </div>

                {currentStep !== "information" && (
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Shipping</div>
                    <div className="text-base font-medium text-gray-900">{formatPrice(shippingCost)}</div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">Impuestos</div>
                  <div className="text-base font-medium text-gray-900">{formatPrice(tax)}</div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">Total</div>
                  <div className="text-base font-medium text-gray-900">{formatPrice(total)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

