import Head from "next/head";
import { useRouter } from 'next/router'

export default function SEO({
  title,
  description,
}: {title: string, description?: string}) {

  const router = useRouter();

  return <Head>
    <title>{`Djimmy Poliard | ${title}`} </title>
    <meta name="title" property="og:title" content={`Djimmy Poliard | ${title}`} key="title" />
    <meta property="og:site_name" content="Djimmy Poliard" key="site_name" />
    <meta property="og:url" content={'djimmypoliard.dev' + router.pathname} key="url" />
    <meta property="og:description" content={description ? description : `Full-stack Engineer with ${(new Date()).getFullYear() - 2015}+ years of experience building scalable web applications and internal tools that drastically improve efficiency. Throughout my career I've built applications like fintech platform, communication, e-commerce, Point Of Sale(POS), HR management, School management, Social network and so on using PHP, laravel, Ruby on Rails, Sinatra, Bootstrap, Javascript, React JS, React Native, Next.Js, TypeScript GraphQL and other technologies`} key="description" />
    <meta property="og:type" content="website" key="type" />
    <meta name="keywords" content="curri culum, poliard, djimmy, poliard djimmy, djimmy poliard, jimmy, cv, portfolio, web, web dev, full, full stack, software" key="keywords" />

    <meta name="image" property="og:image" content="/img/jey.jpg" key="image" />
    <meta property="og:image:width" content="300" key="og:image:width" />
    <meta property="og:image:height" content="300" key="og:image:height" />

    <meta name="author" content="Djimmy Poliard" />
    <meta property="og:type:article:published_time" content="Jun 1, 2021" key="type" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@poliard88" />
    <meta name="twitter:title" content={`Djimmy Poliard | ${title}`} />
    <meta name="twitter:description" content={description ? description : `Full-stack Engineer with ${(new Date()).getFullYear() - 2015}+ years of experience building scalable web applications and internal tools that drastically improve efficiency. Throughout my career I've built applications like fintech platform, communication, e-commerce, Point Of Sale(POS), HR management, School management, Social network and so on using PHP, laravel, Ruby on Rails, Sinatra, Bootstrap, Javascript, React JS, React Native, Next.Js, TypeScript GraphQL and other technologies`} />
    <meta name="twitter:image" content="/img/me.png" />

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  </Head>
}