import Container from '@components/ui/container';
import CategoryBlock from '@containers/category-block';
import Layout from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import Divider from '@components/ui/divider';
import BannerSliderBlock from '@containers/banner-slider-block';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
// import BannerCard from '@components/common/banner-card';
// import BannerBlock from '@containers/banner-block';
// import DownloadApps from '@components/common/download-apps';
// import Support from '@components/common/support';
// import Instagram from '@components/common/instagram';
// import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
// import ProductsFeatured from '@containers/products-featured';
// import ExclusiveBlock from '@containers/exclusive-block';
// import Subscription from '@components/common/subscription';
// import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
// import { homeThreeBanner as banner } from '@framework/static/banner';
// import { homeThreeMasonryBanner as masonryBanner } from '@framework/static/banner';
// import { ROUTES } from '@utils/routes';
// import BrandGridBlock from '@containers/brand-grid-block';

export default function Home() {
  return (
    <>
      {/* <BannerBlock data={masonryBanner} /> */}
      {/* <Container>
        <ProductsFlashSaleBlock date={'2024-03-01T01:02:03'} />
      </Container> */}
      <BannerSliderBlock />
      <Container>
        <CategoryBlock sectionHeading='text-shop-by-category' type='rounded' />
        {/* <ProductsFeatured sectionHeading='text-featured-products' limit={5} /> */}
        {/* <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className='mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0'
        /> */}
        {/* <BrandGridBlock sectionHeading='text-top-brands' /> */}
        {/* <BannerCard
          key={`banner--key${banner[1].id}`}
          banner={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className='mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0'
        /> */}
        <BannerWithProducts
          sectionHeading='text-on-selling-products'
          categorySlug='/search'
        />
        {/* <ExclusiveBlock /> */}
        {/* <NewArrivalsProductFeed /> */}
        {/* <DownloadApps /> */}
        {/* <Support /> */}
        {/* <Instagram /> */}
        {/* <Subscription className='px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16' /> */}
      </Container>
      <Divider className='mb-0' />
    </>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
