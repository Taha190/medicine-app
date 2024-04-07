import { useRouter } from 'next/router';

export async function getServerSideProps({ params }) {
    const { ProductSlug } = params;
  
    const url = "https://apidb.dvago.pk/AppAPIV3/GetProductDetailBySlugV2&ProductSlug=${ProductSlug}&BranchCode=32";

    const response = await fetch(url);
    const data = await response.json();
    if (!data) {
        return {
            notFound: true, // Handle cases where product is not found
        };
    }
    return {
        props: { productData: data }, // Pass data as props
    };
  }
  

const Product = ({ productData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {JSON.stringify(productData)}
    </div>
  );
};
export default Product;