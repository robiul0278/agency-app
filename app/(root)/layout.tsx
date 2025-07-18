import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
export default RootLayout;