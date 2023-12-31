import {Roboto} from "next/font/google";
import {Navbar} from "@/widgets/Navbar";
import {Footer} from "@/widgets/Footer/ui/Footer";
import {StoreProvider} from "@/app/providers/StoreProvider/StoreProvider";

const robot = Roboto({
    weight: '400',
    display: 'swap',
    subsets: ['cyrillic-ext', 'greek'],
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={robot.className}>
        <body className='container'>
            <StoreProvider>
                <Navbar/>
                {children}
                <Footer className='bottom'/>
            </StoreProvider>
        </body>
    </html>
  )
}
