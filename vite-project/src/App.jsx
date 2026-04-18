import './App.css'
import { Home } from './Pages/Home'
import { Project } from './Pages/Project'
import { Login } from './Pages/Login'
import { Blog } from './Pages/Blog'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { ContactLayout } from './Layout/ContactLayout'
import { Info } from './Component/InfoPage'
import { Form } from './Component/FormPage'
import { Skills } from './Component/Skills'
import { Achievement } from './Component/Achievement'
import { Notfoundpage } from './Pages/Notfoundpage'
import { AboutLayout } from './Layout/AboutLayout'
import { Services } from './Pages/Services'
import { ThankYou } from './pages/ThankYou';
import { ComponentGrid } from './Pages/Component'
import { Showcase } from './Pages/Showcase'
import { Templates } from './Pages/Template'
import { SaktrixUI } from './Layout/SaktrixUi'
import { ComponentLayout } from './Layout/ComponentLayout'
import { Hero } from './UIcomponent/Companies/Hero/Hero'
import { CTA } from './UIcomponent/Companies/CTA/CTA'
import { ContactSection } from './UIcomponent/Companies/Contact/Contact'
import { AboutSection } from './UIcomponent/Companies/About/About'
import { BannerSection } from './UIcomponent/Companies/Banner/Banner'
import { BlogSection } from './UIcomponent/Companies/Blog/Blog'
import { ErrorSection } from './UIcomponent/Companies/Error/Error'
import { FAQSection } from './UIcomponent/Companies/FAQ/FAQ'
import { FooterSection } from './UIcomponent/Companies/Footer/Footer'
import { FormSection } from './UIcomponent/Companies/Form/Form'
import { LogoColudSection } from './UIcomponent/Companies/Logocolud/Logocolud'
import { NavbarSection } from './UIcomponent/Companies/Navbar/Navbar'
import { NewsSection } from './UIcomponent/Companies/NewsLetter/Newsletter'
import { PriceSection } from './UIcomponent/Companies/Price/Price'
import { ProcessSection } from './UIcomponent/Companies/Process/Process'
import { ProjectSection } from './UIcomponent/Companies/Project/Project'
import { ServicesSection } from './UIcomponent/Companies/Services/Services'
import { StatsSection } from './UIcomponent/Companies/Stats/Stats'
import { SwipperSection } from './UIcomponent/Companies/Swipper/Swipper'
import { TeamSection } from './UIcomponent/Companies/Teamsection/TeamSection'
import { TestimonialSection } from './UIcomponent/Companies/Testimonial/Testimonial'
import { WhychooseSection } from './UIcomponent/Companies/Whychoose/Whychoose'
import { FeaturesSection } from './UIcomponent/Companies/Features/Features'
import { AI } from './UIcomponent/AI/AI'
import { Dashboards } from './UIcomponent/AI/Dashboards'


function App ()
{
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='components' element={<ComponentLayout />}>
          <Route path='hero' element={<Hero />} />
          <Route path='CTA' element={<CTA />} />
          <Route path='contact' element={<ContactSection />} />
          <Route path='about' element={<AboutSection />} />
          <Route path='Banner' element={<BannerSection />} />
          <Route path='Blog' element={<BlogSection />} />
          <Route path='Error' element={<ErrorSection />} />
          <Route path='FAQ' element={<FAQSection />} />
          <Route path='Footer' element={<FooterSection />} />
          <Route path='Sign-Signup' element={<FormSection />} />
          <Route path='Logocolud' element={<LogoColudSection />} />
          <Route path='Navbar' element={<NavbarSection />} />
          <Route path='News' element={<NewsSection />} />
          <Route path='pricing' element={<PriceSection />} />
          <Route path='Process' element={<ProcessSection />} />
          <Route path='Project' element={<ProjectSection />} />
          <Route path='Services' element={<ServicesSection />} />
          <Route path='Stats' element={<StatsSection />} />
          <Route path='Swipper' element={<SwipperSection />} />
          <Route path='Team' element={<TeamSection />} />
          <Route path='Testimonial' element={<TestimonialSection />} />
          <Route path='Whychoose' element={<WhychooseSection />} />
          <Route path='feature' element={<FeaturesSection />} />
          <Route path='ai' element={<AI />} />
          <Route path='dashboards' element={<Dashboards />} />



        </Route>

        {/* <Route path='templates' element={<Templates/>}/> */}
        <Route path='templates' element={<Templates />} />
        <Route path='showcase' element={<Showcase />} />

        <Route path='about' element={<AboutLayout />}>
          <Route path='skills' element={<Skills />} />
          <Route path='achievement' element={<Achievement />} />
        </Route>
        <Route path='project' element={<Project />} />
        <Route path='services' element={<Services />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<Info />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path="/thank-you" element={<ThankYou />} />

        <Route path='*' element={<Notfoundpage />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={routerApp}> </RouterProvider>
  )



}

export default App















