import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import { Top3 } from '../components/Top3'
import { BreadCrumb } from 'primereact/breadcrumb'

export default function Crimea() {
  const items = [{ label: 'Курорты Крыма' }]
  const home = { template: () => <Link href="/"><i className='pi pi-home' /></Link> }

  return (
    <>
      <Head>
        <title>Организация спортивных сборов в Краснодарском крае</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content={`Спортивные сборы в Краснодарском крае ${new Date().getFullYear()}. Компания «Про100-Тур» предлагает базы отдыха, детские лагеря и пансионаты для проведения спортивных и тренировочных сборов в Краснодарском крае.`} />
        <meta property="og:title" content="Организация спортивных сборов в Краснодарском крае" />
        <meta property="og:description" content={`Спортивные сборы в Краснодарском крае ${new Date().getFullYear()}. Компания «Про100-Тур» предлагает базы отдыха, детские лагеря и пансионаты для проведения спортивных и тренировочных сборов в Краснодарском крае.`} />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <main className='fadein animation-duration-800'>
          <BreadCrumb model={items} home={home} pt={{ root: {className: 'border-none'}}} />
          <div className='text-3xl text-700 font-medium text-center my-5'>Курорты Крыма</div>
          <img src='/crimea.jpg' alt='Курорты Крыма' width='100%' height={450} className='shadow-2 border-round-sm' />
          <div className='text-lg my-3'>
            <span className='font-medium'>Крым</span>: жемчужина отдыха у моря! Откройте для себя волшебство Крыма!  Многообразие курортов – от фешенебельных Ялты и Алушты до уютных Коктебеля и Судака – подарит незабываемые впечатления.  Чистейшие пляжи, величественные горы, исторические достопримечательности и гостеприимные жители ждут вас!  Выбирайте свой идеальный курорт и наслаждайтесь отдыхом на берегу Черного моря!
          </div>
          <Top3 best='cr' />
        </main>
      </MainLayout>
    </>
  ) 
}
