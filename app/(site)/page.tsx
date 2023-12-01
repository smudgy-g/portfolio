import Image from 'next/image'
import JobsCard from '../../components/shared/JobsCard'
import LinkButton from '../../components/shared/LinkButton'

export default  function Home() {

  return (
    <>
      <section className="hero-bg pt-32 md:pb-16 md:pt-40 flex flex-col items-center justify-center">
          <article className="text-left flex flex-col md:flex-nowrap md:flex-row md:gap-10 w-full items-center justify-between max-w-6xl">
            <div className="px-4 md:px-28">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-accent font-bold tracking-tight">
                Software Developer.
              </h1>
              <p className="text-base text-cream leading-relaxed my-3">
                {`I'm Adam Griffiths, an enthusiastic software developer specialising in React/Node.js technologies. I love to create beautiful, performant products and user experiences, seeking innotative ways to expand and engage my skills and the world around me.`}

              </p>
              
              <ul className="flex items-center justify-evenly md:justify-start gap-x-6 my-8 md:my-10">
                <li>
                  <LinkButton href='https://github.com/smudgy-g'>
                    Github
                  </LinkButton>
                </li>
                <li>
                  <LinkButton href='https://www.linkedin.com/in/adam-james-griffiths/'>
                    LinkedIn
                  </LinkButton>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-fit bg-accent flex justify-center items-center p-6 md:bg-transparent lg:pr-28">
              <figure className="relative border border-dark-purple min-w-[250px] min-h-[250px]">
                <Image
                  src="/profile_image.png"
                  height={200}
                  width={200}
                  alt="Profile image of Adam Griffiths"
                  className="-mt-3 ml-2 md:-mt-10 md:-ml-7"
                />
              </figure>
            </div>
          </article>
      </section>
      
      <section className="flex justify-center items-center my-12">
        <div className="flex flex-col text-left px-4 md:px-28 gap-8 max-w-6xl">
          <article className="w-1/2 px-8">
            <h1 className="text-4xl font-bold">Engineering. Develop.</h1>
            <p>I come fully equipped and preloaded with JavaScript and love to develop performant web applications on both the server and the client side. I enjoy developing complex interfaces with technologies like GraphQL, Next.js and Tailwind CSS.</p>
          </article>
          <article className="w-1/2 self-end px-8">
            <h1 className="text-4xl font-bold">Versatile. Curious.</h1>
            <p>I am passionate about continuous learning and tackling new challenges to deliver intuitive, engaging experiences across customer-facing and internal-facing applications. I am passionate about building user-friendly and accessible web applications. I am also committed to writing high-quality code that meets the highest standards for security, maintainability, and performance</p>
          </article>
        </div>
      </section>

      <section className="flex justify-center items-center my-12 bg-deep-blue text-white">
        <div className="flex text-left px-4 md:px-28 py-12 gap-8 max-w-6xl">
          <article>
            <h1 className="text-4xl font-bold">Insight.</h1>
            <div className="mt-7 space-y-6 w-1/2">
              <p>I have over two years of experience designing and building performant and scalable user interfaces using Javascript technologies and frameworks.</p>

              <p>In this time I have built performant products and solutions ranging from websites, to e-commerce platforms, to inventory management.</p>

              <p>I have a proven track record of contributing to code quality through code reviews, refactors and other initiatives to streamline development processes. My experience also includes working closely with back-end teams to develop and integrate custom UI components while ensuring performance, accessibility and security standards are met.</p>

              <p>I am passionate about building user-friendly and accessible web applications. I am also committed to writing high-quality code that meets the highest standards for security, maintainability, and performance. I am a dedicated professional with a strong work ethic and a genuine passion for programming that gives me a productive edge. I like to stay up-to-date with emerging technologies and industry best practices, I work well in teams, and have experience in fast-paced and dynamic environments.</p>

            </div>
          </article>
          <article>
            
          </article>
        </div>
      </section>
    </>
  )
}
