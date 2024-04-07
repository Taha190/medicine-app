import Navbar from "../src/components/navbar";

import Breadcrumbs from '@mui/material/Breadcrumbs';


export async function getServerSideProps() {

  const url = 'https://apidb.dvago.pk/AppAPIV3/GetProductDetailBySlugV2&ProductSlug=panadol-500mg-tablets&BranchCode=32';

  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data)

  if (!data) {
      return {
        
          notFound: true, // Handle cases where product is not found
      };
  }

  return {
      props: { productData: data }, // Pass data as props
  };
}

const ProductDetails = ({ productData }) => {
  if (!productData) return <div>Product not found!</div>;
  return (
      
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
               
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
              
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {productData.Data.Title}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300"> {productData.Data.Price}</span>
                    </div>
                    
                </div>
                
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>

          {JSON.stringify(productData.Data)}
      </div>
  )

};
export default ProductDetails;