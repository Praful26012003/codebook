import {Hero} from "../Home/components/Hero"
import {FeaturedProducts} from "../Home/components/FeaturedProducts"
import {Testimonials} from "../Home/components/Testimonials"
import {Faq} from "../Home/components/Faq"
import { useTitle } from "../../hooks/useTitle"
export const HomePage = () => {
  useTitle("Explore latest E-Books - CodeBook")
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
