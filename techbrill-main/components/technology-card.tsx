import Image from "next/image"
import { cn } from "@/lib/utils"

interface TechnologyCardProps {
  name: string
  icon: string
  className?: string
}

export default function TechnologyCard({ name, icon, className }: TechnologyCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all",
        "flex flex-col items-center justify-center text-center",
        className,
      )}
    >
      <div className="relative h-16 w-16 mb-3">
        <Image src={icon || "/placeholder.svg"} alt={name} fill sizes="16w" className="object-contain" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}
