import { BaseLayout } from "@/components/layouts"

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    )
}