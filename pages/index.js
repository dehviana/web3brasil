import { readFileSync } from 'fs'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import renderHTML from 'react-render-html'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>Web3 Brasil &amp; Cripto - Uma curadoria de links incríveis da Web3, bibliotecas, ferramentas e muito mais. </title>
        <meta name="title" content="Web3 BR &amp; Cripto - Uma curadoria de links incríveis da Web3, Defi, NFTs e muito mais. " />
        <meta name="description" content="Web3 BR &amp; Cripto - Uma curadoria de links incríveis da Web3, Defi, NFTs e muito mais. " />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Web3 BR &amp; Cripto" />
        <meta property="og:site_name" content="Web3 BR &amp; Cripto - " />
        <meta property="og:url" content="https://web3br.com" />
        <meta property="og:description" content="Web3 BR &amp; Cripto - Uma curadoria de links incríveis da Web3, Defi, NFTs e muito mais. " />
        <meta property="og:type" content="website" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@web3br" />
        <meta name="twitter:title" content="Web3 Brasil" />
        <meta name="twitter:description" content="Web3 Brasil &amp; Cripto - Uma curadoria de links incríveis da Web3, Defi, NFTs e muito mais. " />

      </Head>

    
      <main className="mx-4 my-12 lg:mx-0 flex flex-row justify-center bg-black text-white">
        <article className='prose prose-a:text-blue-700 prose-a:no-underline text-white hover:prose-a:underline prose-a:text-nowrap prose-a:font-mono prose-headings:text-gray prose-headings:my-0 prose-h2:mb-2 prose-h2:text-white prose-h3:text-white prose-h1:text-white  prose-li:my-0'>
          {renderHTML(content)}
        </article>
      </main>

      <footer className="flex flex-row justify-center mb-4 text-white bg-black">
       by <Link href='https://github.com/dehviana' passHref>
          <a target="_blank" rel="noopener" className='mx-1 text-blue-700 no-underline hover:underline text-nowrap'>André L.F.V</a>
        </Link> | 
        <Link href='https://twitter.com/monomonio' passHref>
          <a target="_blank" rel="noopener" className='mx-1 text-blue-700 no-underline hover:underline text-nowrap'>monomonio</a>
        </Link>
      
      </footer>
    </>
  )
}

export async function getStaticProps({ params }) {
  let readmePath = 'README.md'
  if (params?.locale && params.locale !== 'en') {
    readmePath = join('locales', params.locale, 'README.md')
  }

  const readmeFile = readFileSync(readmePath).toString()
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(readmeFile)

  return {
    props: {
      content: content.toString()
    }
  }
}
