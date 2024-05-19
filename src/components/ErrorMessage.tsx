import { PropsWithChildren } from "react"

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="bg-red-600 p-2 text-center text-white font-bold text-sm">
      {children}
    </p>
  )
}
